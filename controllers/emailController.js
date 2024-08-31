const EmailTemplate = require('../models/EmailTemplate');
const nodemailer = require('nodemailer');

exports.createTemplate = async (req, res) => {
    try {
        const { subject, body } = req.body;
        const newTemplate = new EmailTemplate({ subject, body });
        await newTemplate.save();
        res.status(201).json(newTemplate);
    } catch (err) {
        res.status(500).json({ error: 'Error creating email template' });
    }
};

exports.sendEmail = async (req, res) => {
    try {
        const { templateId, recipientListId } = req.body;
        // Fetch template and recipients
        const template = await EmailTemplate.findById(templateId);
        // TODO: Fetch recipient list from database

        // Setup nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'your_email@gmail.com',
                pass: 'your_password'
            }
        });

        // Send emails
        // TODO: Send email using transporter.sendMail

        res.json({ message: 'Emails sent successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error sending emails' });
    }
};
