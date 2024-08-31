const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const SentEmail = require('../models/SentEmail');

router.post('/send', async (req, res) => {
    const { templateId, recipientListId } = req.body;

    try {
        // Validate ObjectId format
        if (!mongoose.Types.ObjectId.isValid(templateId) || !mongoose.Types.ObjectId.isValid(recipientListId)) {
            return res.status(400).json({ error: 'Invalid templateId or recipientListId' });
        }

        // Simulate sending emails (replace with actual email sending logic)
        console.log('Sending emails...');

        // Save email data to MongoDB
        const sentEmail = new SentEmail({
            templateId,
            recipientListId,
            status: 'sent',
        });

        await sentEmail.save();

        res.status(200).json({ message: 'Emails sent successfully' });
    } catch (error) {
        console.error('Failed to send emails:', error);

        // Save the error information to MongoDB
        const sentEmail = new SentEmail({
            templateId,
            recipientListId,
            status: 'failed',
            errorMessage: error.message,
        });

        await sentEmail.save();

        res.status(500).json({ error: 'Failed to send emails' });
    }
});

router.get('/sent', async (req, res) => {
    try {
        const sentEmails = await SentEmail.find().populate('templateId').populate('recipientListId');
        res.status(200).json(sentEmails);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve sent emails' });
    }
});

module.exports = router;
