const express = require('express');
const path = require('path');
const PORT = 3001
const app = express()
const notes = require('./db/db.json')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });

app.get('/api/notes', (req, res) => res.json(notes));

app.listen(PORT, () =>
    console.log(`Serving static asset routes on port ${PORT}!`)
);