const mongoose = require('mongoose');

const sentEmailSchema = new mongoose.Schema({
    templateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Template', // Ensure 'Template' model exists
        required: true
    },
    recipientListId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RecipientList', // Ensure 'RecipientList' model exists
        required: true
    },
    status: {
        type: String,
        required: true
    },
    errorMessage: String
});

module.exports = mongoose.model('SentEmail', sentEmailSchema);
