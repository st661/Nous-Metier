import mongoose from 'mongoose'

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: 'Job title is required'
    },

    company: {
        type: String,
        trim: true,
        required: 'Company name is required'
    },

    location: {
        type: String,
        trim: true,
        required: 'Location is required'
    },

    type: {
        type: String,
        enum: ['One-day', 'Part-time', 'Full-time'],
        required: 'Job type is required'
    },

    category: {
        type: String,
        enum: ['Food service', 'Retail', 'Warehouse', 'Hospitality', 'Office', 'Events'],
        required: 'Category is required'
    },

    pay: {
        type: String,
        trim: true
    },

    abroad: {
        type: Boolean,
        default: false
    },

    description: {
        type: String,
        trim: true,
        required: 'Description is required'
    },

    requirements: {
        type: String,
        trim: true
    },

    schedule: {
        type: String,
        trim: true
    },

    startDate: {
        type: Date
    },

    applyBy: {
        type: Date
    },

    postedBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },

    created: {
        type: Date,
        default: Date.now
    },

    updated: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Job', JobSchema);