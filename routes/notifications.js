const express = require('express');
const router = express.Router();

// Mock endpoint to get notifications
router.get('/', (req, res) => {
    // Here you can fetch notifications from your database
    const notifications = [
        { id: 1, message: 'Email sent successfully', type: 'success' },
        { id: 2, message: 'Error sending email', type: 'error' },
    ];
    res.json(notifications);
});

module.exports = router;
