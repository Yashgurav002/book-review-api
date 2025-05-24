const express = require('express');
const connectDB = require('./db');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

// Define routes here...
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

const reviewRoutes = require('./routes/reviewRoutes');
app.use('/reviews', reviewRoutes);

const bookRoutes = require('./routes/bookRoutes');
app.use('/books', bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
