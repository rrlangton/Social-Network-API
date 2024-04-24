const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            max_length: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^\w+9[\.-]?\w+)*@\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        },
        thoughts: [{
            type: Schema.Types.ObjectId, ref: 'thought'
        }]
    },
    {
        toJSON: {
            virtuals: true
        },
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

model.exports = User;