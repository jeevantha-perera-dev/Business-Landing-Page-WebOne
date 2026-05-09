const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post('/api/contact', (req, res) => {
    const formData = req.body;
    console.log("New message recieves!");
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Phone:", formData.number);
    console.log("Message:", formData.message);

    res.json({ success: true, message: "Thank you! Message recieved." });
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});