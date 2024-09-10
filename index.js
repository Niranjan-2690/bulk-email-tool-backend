const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const emailRoutes = require('./routes/email');
const recipientListRoutes = require('./routes/recipientLists');
const notificationRoutes = require('./routes/notifications');
const templatesRouter = require('./routes/templates');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://niranjan:loXjacicNMohfaTq@cluster0.na06d.mongodb.net/bulk-email-tool?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log("Error connecting mangodb", err));

app.use('/api/auth', authRoutes);
app.use('/api', emailRoutes);
app.use('/api/recipient-lists', recipientListRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/templates', templatesRouter);

app.listen(3000, () => console.log('Server running on port 3000'));
