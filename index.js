// const express = require('express');
import express from 'express';
import cors from'cors';
import routerV1 from './src/api/router';
import responseMiddleware from './src/middlewares/responses';

const app = express();

app.use(cors());
app.get('/', (req, res) => {
  res.send('Matching APP Server')
});

app.use('/api/1.0/', routerV1);
app.use(responseMiddleware());
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Node API listening on port', port);
});