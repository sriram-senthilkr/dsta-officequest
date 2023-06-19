const mongoose = require('mongoose');

const OTPSchema = new mongoose.Schema({
    questId: {
        type: String,
    },
    expiresAt: {
        type: Date,
    },
    otp: {
        type: String,
    },
    userId: {
        type: String,
    }
})

module.exports = OTP = mongoose.model('otp', OTPSchema);