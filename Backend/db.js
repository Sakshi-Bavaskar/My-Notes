const mongoose = require('mongoose');
const express = require('express')
const app = express();
const port = 5000
const cor = require("cors")

const mongoURI = "mongodb://127.0.0.1:27017/?directConnection=true";
mongoose.connect(mongoURI).then(() => {
    console.log('Connected to mongo successfully!');
}).catch((e) => console.log(e.message));

app.get('/api/v1/login', (req, res) => {
    res.send('hello login')
})
app.get('/api/v1/signup', (req, res) => {
    res.send('hello signup')
})
// Available Routes
app.use(cor())
app.use(express.json());
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.get('/', (req, res) =>
    res.send('I am Live')
)
app.listen(port, () => {
    console.log(`My-Notes Backend listening on port ${port}`)
})
