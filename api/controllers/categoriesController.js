const axios = require('axios');

exports.show = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(
        `${process.env.API_MELI}/categories/`+ id,
    );
    const categories = {
      parentCategories: response.data.path_from_root,
    };
    res.json(categories);
  } catch (error) {
    res.json(error.message);
  }
};

exports.getItemCategory = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(
        `${process.env.API_MELI}/items/`+ id,
    );
    res.json(response.data.category_id);
  } catch (error) {
    res.json(error.message);
  }
};
