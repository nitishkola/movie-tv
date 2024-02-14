const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());

const client = new MongoClient('mongodb+srv://admin:admin@cluster0.iwtqpst.mongodb.net/?retryWrites=true&w=majority');
client.connect();
const db = client.db('counselling');
const col = db.collection('register');

app.post('/register', async (req, res) => {
    try {
        await col.insertOne(req.body); // Wait for insertion to complete
        res.send('Inserted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/retrieve', async (req, res) => {
    try {
        const result = await col.find().toArray(); // Wait for data retrieval to complete
        console.log(result);
        res.send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/about', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.listen('8085', () => {
    console.log('Server is Running');
});
