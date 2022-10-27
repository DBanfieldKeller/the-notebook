const express = require('express');
const path = require('path');
const fs = require('fs')
const PORT = 3001
const app = express()
const notes = require('./db/db.json')
const util = require('util')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// promisify readFile
const readFromFile = util.promisify(fs.readFile);

// html routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});


// api routes
app.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for tips`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
}
);





app.listen(PORT, () =>
    console.log(`Serving static asset routes on port ${PORT}!`)
);