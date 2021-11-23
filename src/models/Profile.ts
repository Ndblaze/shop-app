import { Schema, model } from 'mongoose';

interface Profile {
    user: string;
    avatar?: string;
    avatarKey?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const schema = new Schema<Profile>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    address: {
        type: [String],
        required: [true]
    },

    phone: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const Profile =  model<Profile>('Profile', schema);