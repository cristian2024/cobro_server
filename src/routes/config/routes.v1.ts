import express, { Router } from "express";


const v1: Router = express.Router();


v1.get('/ping', (_req, res) => {
  res.send('pong') 
})

export default v1;