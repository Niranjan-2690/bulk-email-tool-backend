const express = require('express');
const router = express.Router();
const Template = require('../models/Template');

// Create a new template
router.post('/', async (req, res) => {
    const { name, subject, body } = req.body;
    try {
        const newTemplate = new Template({ name, subject, body });
        await newTemplate.save();
        res.status(201).json(newTemplate);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create template' });
    }
});

// Get all templates
router.get('/', async (req, res) => {
    try {
        const templates = await Template.find();
        res.status(200).json(templates);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve templates' });
    }
});

// Get a single template by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const template = await Template.findById(id);
        if (!template) return res.status(404).json({ error: 'Template not found' });
        res.status(200).json(template);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve template' });
    }
});

// Update a template
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, subject, body } = req.body;
    try {
        const updatedTemplate = await Template.findByIdAndUpdate(
            id,
            { name, subject, body },
            { new: true }
        );
        if (!updatedTemplate) return res.status(404).json({ error: 'Template not found' });
        res.status(200).json(updatedTemplate);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update template' });
    }
});

// Delete a template
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTemplate = await Template.findByIdAndDelete(id);
        if (!deletedTemplate) return res.status(404).json({ error: 'Template not found' });
        res.status(200).json({ message: 'Template deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete template' });
    }
});

module.exports = router;
