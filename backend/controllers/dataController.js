const Data = require('../models/Data');

exports.getAllData = async (req, res) => {
  try {
    const filters = req.query;
    const query = {};

    for (let key in filters) {
      if (filters[key] && filters[key].trim() !== '') {
        query[key] = filters[key].trim();
      }
    }

    const data = await Data.find(query);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
