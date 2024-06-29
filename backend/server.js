const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./database');

//algorithms
const knn = require('./algorithms/knn');
const kmeans = require("./algorithms/kmeans");

const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/realEstateData', (req, res) => {
    connection.query("SELECT * FROM real_estate_data_chicago", function (err, results) {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error fetching data from the database');
        } else {
            res.status(200).json(results);
        }
    });
});

app.post('/knn', (req, res) => {
    const userInput = req.body;
    const query = {
        bedrooms: parseInt(userInput.bedrooms),
        bathrooms: parseInt(userInput.bathrooms),
        sqft: parseInt(userInput.sqft),
        yearBuilt: parseInt(userInput.yearBuilt),
        k: parseInt(userInput.k)
    };
    connection.query("SELECT * FROM real_estate_data_chicago", (err, results) => {
        if (err) {
            console.error('Error fetching data from the database:', err);
            res.status(500).send('Error fetching data from the database');
        } else {
            const finalResults = knn(results, query);
            res.json(finalResults);
        }
    });
});

app.post('/kmeans', (req, res) => {
    const userInput = req.body;
    const k = parseInt(userInput.k);
    connection.query("SELECT * FROM real_estate_data_chicago", (err, results) => {
        if (err) {
            console.error('Error fetching data from the database:', err);
            res.status(500).send('Error fetching data from the database');
        } else {
            const finalResults = kmeans(results, k);
            res.json(finalResults);
        }
    });
});


app.post('/add', (req, res) => {
    const query = {
        type: 'single_family',
        text: '',
        year_built: req.body.yearBuilt,
        beds: req.body.bedrooms,
        baths: req.body.bathrooms,
        baths_full: '0',
        baths_half: '0',
        garage: req.body.garage,
        lot_sqft: req.body.sqft,
        sqft: req.body.sqft,
        stories: '1',
        lastSoldPrice: '',
        soldOn: '',
        listPrice: req.body.listPrice,
        status: 'for_sale'
    };

    const sql = 'INSERT INTO real_estate_data_chicago (type, text, year_built, beds, baths, baths_full, baths_half, garage, sqft, lot_sqft, stories, lastSoldPrice, soldOn, listPrice, status) VALUES (? ,? , ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(sql, Object.values(query), (err, rows) => {
        if (err) {
            console.error('error running SQL query:', err);
            return;
        }
        res.json(rows);
    });
});

app.listen(port, () => {
    console.log(`Running on port: ${port}`);
});