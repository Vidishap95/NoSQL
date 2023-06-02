const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtsById,
    createThought,
    deleteThought,
    updateThoughtById,
    createReaction,
    deleteReaction,
} = require ('../../controllers/thought-controllers');

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:thoughtId').get(getThoughtsById).put(updateThoughtById).delete(deleteThought);

router.route('/:thoughtId/reactions').post(createReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// export the router
module.exports = router;