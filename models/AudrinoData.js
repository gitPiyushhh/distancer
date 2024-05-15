const mongoose = require('mongoose');

const arduinoDataSchema = new mongoose.Schema({
    speed: {
        type: Number,
        required: true
    },
    coordinates: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    machineId: {
        type: String,
        required: true
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    automobile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Automobile',
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

arduinoDataSchema.index({ coordinates: '2dsphere' });

const ArduinoData = mongoose.model('ArduinoData', arduinoDataSchema);

module.exports = ArduinoData;
