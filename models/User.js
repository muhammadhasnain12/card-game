const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Scheme
const UserSchema = new Schema({
    realName: {
        type: String,
        default: '',
        required: true
    },
    playerName: {
        type: String,
        default: '',
        required: true
    },
    asset: {
        type: String,
        default: '',
        required: true
    }
});


module.exports = User = mongoose.model('user', UserSchema);