// src/backend.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Define routes for AI services or real-time features

app.listen(8001, () => {
  console.log('Node.js server running on port 8001');
});