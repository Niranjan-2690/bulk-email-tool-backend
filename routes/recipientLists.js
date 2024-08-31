const express = require('express');
const router = express.Router();
const RecipientList = require('../models/RecipientList');


// GET all recipient lists
router.get('/', async (req, res) => {
    try {
        const recipientLists = await RecipientList.find();
        res.json(recipientLists);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// POST a new recipient list
router.post('/', async (req, res) => {
    const { name, recipients } = req.body;

    if (!name || !Array.isArray(recipients) || recipients.length === 0) {
        return res.status(400).json({ error: 'Invalid data' });
    }

    try {
        const recipientList = new RecipientList({ name, recipients });
        await recipientList.save();
        res.status(201).json({ message: 'Recipient list created successfully!' });
    } catch (error) {
        console.error('Error creating recipient list:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/api/recipient-lists', async (req, res) => {
    try {
        const lists = await RecipientList.find();
        res.status(200).json(lists);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching recipient lists' });
    }
});

module.exports = router;



module.exports = router;
