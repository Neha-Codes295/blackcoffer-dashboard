const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const dataRoutes = require('./routes/dataRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/data', dataRoutes);
app.use((req, res, next) => {
  console.log(`Incoming: ${req.method} ${req.url}`);
  next();
});


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB:', process.env.MONGO_URI);
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
