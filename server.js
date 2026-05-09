require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Successfully connected to MongoDB!'))
    .catch((error) => console.error('Error connecting to MongoDB', error));

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('contact', contactSchema);


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post('/api/contact', async (req, res) => {
    try {
        const formData = req.body;
        console.log("New message recieves!");

        const newMessage = new Contact({
            name: formData.name,
            email: formData.email,
            number: formData.number,
            message: formData.message
        });

        await newMessage.save();

        console.log("Successfully saved to MongoDB!");
        res.json({ success: true, message: "Thank you! Your message has been saved." });
    }

    catch (error) {
        console.error("Error saving to database:", error);
        res.status(500).json({ success: false, message: "There was an error saving your message." });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});