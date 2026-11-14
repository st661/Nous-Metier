import mongoose from 'mongoose'

const Registration = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        required: 'First name is required'
    },
    lastname: {
        type: String,
        trim: true,
        required: 'Last name is required'
    },
    email: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please fill a valid email address'],
        required: 'Email is required'
    },
    phone: {
        type: String,
        trim: true,
        unique: 'Phone number already exists',
        required: 'Phone number is required'
    },
    registration: {
        type: Date,
        default: Date.now
    },
    salt: String
}, {
    versionKey: false
});

export default mongoose.model('Registration', Registration);