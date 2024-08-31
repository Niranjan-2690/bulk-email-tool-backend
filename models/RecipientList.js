const mongoose = require('mongoose');

const recipientListSchema = new mongoose.Schema({
    name: { type: String, required: true },
    recipients: [{ type: String, required: true }] // Array of strings
});

const RecipientList = mongoose.model('RecipientList', recipientListSchema);

module.exports = RecipientList;

