const { Thought } = require('../models');

const reactionController = {
    async createReaction(req, res) {
        try {
            const dbReactionData = await Thought.findOneAndUpdate({
                _id: req.params.thoughtId
            }, {
                $push: {
                    reactions: {
                        username: req.body.username,
                        reactionBody: req.body.reactionBody
                    }
                }
            })
            res.json(dbReactionData)
        } catch(err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async deleteReaction(req, res) {
        try {
            const dbReactionData = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                { 
                    $pull: { 
                        reactions: req.params.reactionId 
                    } 
                })
            res.json(dbReactionData)
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
};

module.exports = reactionController;