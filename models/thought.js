const dayjs = require('dayjs');
const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction.js');
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: timeStamp => dayjs(timeStamp).format('DD/MM/YYYY')
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [
            reactionSchema
        ],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

const Thought = model('thought', thoughtSchema)

module.exports = Thought;