const express = require('express');
const { getAllData } = require('../controllers/dataController');
const router = express.Router();
const Data = require('../models/Data');

router.get('/', getAllData);

router.get('/test', async (req, res) => {
  const data = await Data.findOne({ insight: { $regex: 'Greenhouse', $options: 'i' } });
  res.json(data);
});

module.exports = router;
