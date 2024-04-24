const { Thought } = require('../models');

const thoughtController = {
    async getThoughts(req, res) {
        try {
            const dbThoughtData = await Thought.find()
            res.json(dbThoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },

    async getSingleThought(req, res) {
        try {
            const dbThoughtData = await Thought.findOne({_id: req.params.thoughtId})
            .populate('')
            res.json(dbThoughtData)
        } catch(err) {
            console.log(err);
            res.status(500).json(err)
        }
    },

    async createThought(req, res) {
        try {
            const dbThoughtData = await Thought.create(req.body)
            res.json(dbThoughtData)
        } catch(err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async updateThought(req, res) {
        try {
            const dbThoughtData = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {
                    $set: req.body,
                },
                {
                    runValidators: true,
                    new: true,
                }
            );
        }
    }
}