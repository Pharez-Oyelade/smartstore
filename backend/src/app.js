import express from 'express';
import cors from 'cors';

const app = express();

// middleware
app.use(cors()); 
app.use(express.json()); //parse json request body

// Health check route
app.get('/health', (req, res) =>{
  res.json({status: "ok", message: "server is running"})
})

export default app;