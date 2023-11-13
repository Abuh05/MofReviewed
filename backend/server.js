// /server/server.js

import express from 'express';
import connectDB from './config/db.js';
import reportRoutes from './routes/reportRoute.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import cors from 'cors';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Connect to MongoDB
connectDB();

// Middleware for handling JSON data
app.use(express.json());

// CORS middleware
app.use(cors());

// Routes
app.use('/api', reportRoutes);


// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Other configurations and middleware...

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
