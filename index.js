// const express = require('express');
import express from 'express';
import cors from'cors';
import router from './src/router';

const app = express();

app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.use('/api/', router);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Node API listening on port', port);
});