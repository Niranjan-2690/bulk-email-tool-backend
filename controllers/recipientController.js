const RecipientList = require('../models/RecipientList');

exports.uploadRecipients = async (req, res) => {
    try {
        // Handle file upload
        // Parse CSV file and save recipients to the database
        res.status(200).json({ message: 'Recipients uploaded successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error uploading recipients' });
    }
};
