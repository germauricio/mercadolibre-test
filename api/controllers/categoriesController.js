const axios = require('axios');

exports.show = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(
        `${process.env.API_MELI}/categories/`+ id,
    );
    const categories = {
      author: {
        name: 'Mauricio',
        lastname: 'Pauluk',
      },
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
    const categoryId = {
      author: {
        name: 'Mauricio',
        lastname: 'Pauluk',
      },
      category_id: response.data.category_id,
    };
    res.json(categoryId);
  } catch (error) {
    res.json(error.message);
  }
};
