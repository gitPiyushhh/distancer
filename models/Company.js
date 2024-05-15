// Company Schema
const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    contactPerson: {
        type: String,
        required: true
    },
    contactEmail: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    contactPhone: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

    // Can take the PAN, GST and rest of details further
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
