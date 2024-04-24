const { Reaction } = require('../models');

const reactionController = {
    async getReactions(req, res) {
        try {
            const dbReactionData = await Reaction.find()
            res.json(dbReactionData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },

    async getSingleReaction(req, res) {
        try {
            const dbReactionData = await Reaction.findOne({_id: req.params.reactionId})
            .populate('')
            res.json(dbReactionData)
        } catch(err) {
            console.log(err);
            res.status(500).json(err)
        }
    },

    async createReaction(req, res) {
        try {
            const dbReactionData = await Reaction.create(req.body)
            res.json(dbReactionData)
        } catch(err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async updateReaction(req, res) {
        try {
            const dbReactionData = await Reaction.findOneAndUpdate(
                {_id: req.params.reactionId},
                {
                    $set: req.body,
                },
                {
                    runValidators: true,
                    new: true,
                }
            );

            res.json(dbReactionData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    async deleteReaction(req, res) {
        try {
            const dbReactionData = await User.findOneAndDelete({_id: req.params.reactionId})
            res.json({message: 'Reaction deleted'});
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
}

module.exports = reactionController;