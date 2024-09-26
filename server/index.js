require("dotenv").config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello World!");
  });

app.listen(PORT, () => {
    console.log(`Server listening on the port  ${PORT}`);

});

const pool = require('./dbconfig')

app.get('/badges', async (req, res) => {
    try {

      //query the database to get all records from the table
      const list_badges = await pool.query('SELECT * FROM badges_list');

      // Send the rows (array of data) as a response and in JSON format.
      res.json(list_badges.rows);

    } catch (err) {
      res.status(500).send('Internal error:'+ err); 
    }
  });

