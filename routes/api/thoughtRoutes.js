const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
} = require('../../controllers/thoughtController.js');

const {
    createReaction,
    deleteReaction
} = require('../../controllers/reactionController.js');

router
    .route('/')
    .get(getThoughts)
    .post(createThought);

router
    .route('/:thoughtId')
    .get(getSingleThought);

router
    .route('/:thoughtId/reactions')
    .post(createReaction);

 router
    .route('/:thoughtId/reactions/:reactionId')   
    .delete(deleteReaction);

module.exports = router;