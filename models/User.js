const { Schema, model, Types } = require ('mongoose');

const userSchema = new Schema (
    {
        username: {
            type: String,
            require: true,
            unique: true,
            trim: true,
        },

        email: {
            typr:String,
            required: true,
            unique: true,
            validate: {
                validator: function(v) {
                    return .test(v);
                }
            }
        },

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ],
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            }
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

constUser = model('User', userSchema)

module.exports = User