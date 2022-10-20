const Thought = require('../models/Thought');
const User = require('../models/User');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(404).json(err));
    },
    getThoughtById(req, res) {
        Thought.findOne({ _id: req.params.thoughtID })
        .then((thought) =>
            !thought
            ? res.status(404).json({ message: 'No thought with this ID' })
            : res.status(200).json(thought))
        .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thought.create(req.body)
        .then((thought) => {
            return User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: thought._id } },
                { new: true }
            )            
        })
        .then((user) => 
            !user
            ? res.status(404).json({ message: 'Thought created, but user not found' })
            : res.status(200).json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id : req.params.thoughtID },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((thought) =>
            !thought
            ? res.status(404).json({ message: 'No thought with this ID' })
            : res.status(200).json(thought))
        .catch((err) => res.status(500).json(err));
    },
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtID })
        .then((thought) =>
            !thought
            ? res.status(404).json({ message: 'No thought with this ID' })
            : User.findOneAndUpdate(
                { thoughts: req.params.thoughtID },
                { $pull: { thoughts: req.params.thoughtID } }
            ))
            .then((user) => 
                !user
                ? res.status(404).json({ message: 'Thought deleted, but user not found' })
                : res.status(200).json({ message: 'Thought deleted' })
            )
        .catch((err) => res.status(500).json(err));
    },
    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtID },
            { $addToSet: { reactions: req.body }},
            { new: true }
        )
        .then((thought) => 
            !thought
            ? res.status(404).json({ message: 'No thought with this ID' })
            : res.status(200).json(thought)) 
        .catch((err) => res.status(500).json(err));
    },
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtID },
            { $pull: { reactions: { reactionId: req.params.reactionID} }}
        )
        .then((thought) => 
            !thought
            ? res.status(404).json({ message: 'No thought with thid ID' })
            : res.status(200).json({ message: 'Reaction was deleted' })
        )
        .catch((err) => res.status(500).json(err));
    }
};