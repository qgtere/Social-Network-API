const router= require('express').Router();

const {
    getThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// api/thoughts
router.route('/').get(getThoughts).post(createThought);

// api/thoughts/:thoughtID
router.route('/:thoughtID')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

// api/thoughts/:thoughtID/reactions
router.route('/:thoughtID/reactions').post(createReaction);

// api/thoughts/:thoughtID/reactions/:reactionID
router.route('/:thoughtID/reactions/:reactionID').delete(deleteReaction);

module.exports = router;