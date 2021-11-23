import { Schema, model } from 'mongoose';

interface User {
    // id?: string;
    name?: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
    role: string;
}

const schema = new Schema<User>({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    activated: {
        type: Boolean,
        default: false
    },

    disabled: {
        type: Boolean,
        default: false
    },

    phone: {
        type: String
    },

    lastSeen: {
        type: Date
    },

    idUrl: {
        type: String,
    },

    idKey: {
        type: String,
    },

    address1: {
        type: String
    },

    address2: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    profile: {
        type: Schema.Types.ObjectId,
        ref: 'store'
    },

    store: {
        type: Schema.Types.ObjectId,
        ref: 'store'
    }
});

export const User =  model<User>('User', schema);