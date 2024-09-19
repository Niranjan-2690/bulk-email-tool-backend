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

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", (err)=>{
    if(err){
        console.log(err, "Error")
    }else{
        console.log(`Server is connected in port ${PORT}`)
    }
});
