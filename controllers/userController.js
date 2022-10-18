const User = require('../models/User');

module.exports = {
    getUsers(req,res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    getUserById(req,res) {
        User.findOne({ _id: req.params.userID })
        .then((user) => 
            !user
            ? res.status(404).json({ message: 'No user with this ID' })
            : res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userID },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((user) => 
            !user 
                ? res.status(404).json({ message: 'No user with this ID' })
                : res.status(200).json({ message: 'User info updated' })
        )
        .catch((err) => res.status(500).json(err));
    },
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userID })
        .then((user) =>
            !user
                ? res.status(404).json({ message: 'No user with this ID' })
                : res.status(200).json({ message: 'User deleted' })
                //: User.deleteMany({ _id: { $in: user.thoughts } })
        )
        //.then(() => res.json({ message: 'User and associated thoughts were deleted' }))
        .catch((err) => res.status(500).json(err));
    },
    addFriend(req, res) {
        console.log(req.params.userID);
        console.log(req.params.friendID);
        User.findOneAndUpdate(
            { _id: req.params.userID },
            { $addToSet: { friends: req.params.friendID }},
            { runValidators: true, new: true }
        ).
        then((user) =>
            !user
                ? res.status(404).json({ message: 'No user with this ID' })
                : res.json({ message: 'Friend added' })
        ).
        catch((err) => res.status(500).json(err));
    }
};