const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: timeStamp => dayjs(timeStamp).format('DD/MM/YYYY')
        },
    },
    {
        toJSON: {
            virtuals: true,
            getter: true,
        },
        id: false,
    }
);

module.exports = reactionSchema;