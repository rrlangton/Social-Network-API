const routes = require('./routes');
const express = require('express');

const app = express();
const port = 3001;

const db = require('./config/connection.js');

app.use(express.json());
app.use(routes);

db.once('open', () => {
    console.log('Connected successfully to MongoDB');

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  });
 


