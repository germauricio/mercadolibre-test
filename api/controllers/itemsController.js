const axios = require('axios');

exports.index = (req, res) => {
    const search = req.query.q;
    axios({
        url: `${process.env.API_MELI}/sites/MLA/search?q=` + search,
        method: 'get',
      })
        .then(resp => {
          let items = [];
          let categories = [];
          resp.data.results.forEach((result) => {
            categories.push(result.category_id);
            items.push({
              id: result.id,
              title: result.title,
              price: { 
                currency: result.currency_id, 
                amount: result.price, 
                decimals: result.price,
                },
              picture: result.thumbnail, 
              condition: result.condition, 
              free_shipping: result.shipping.free_shipping, 
            })
          });
          
          const response = {
            author: {
              name: 'Mauricio',
              lastname: 'Pauluk'
            },
            categories: categories,
            items: items
          }
          res.status(200).json(response);
        })
        .catch(error => {
          if (error.response) {
            res.status(error.response.status).json(error.response.data);
            return;
          }
          if (error.request) {
            res.json(error.request);
            return;
          }
          res.json(error.message);
        });
}

exports.show = async (req, res) => {
  const id = req.params.id
  const product = await axios.get(`${process.env.API_MELI}/items/`+ id);
  const description = await axios.get(`${process.env.API_MELI}/items/`+ id + '/description');

  const response = {
    author: {
      name: 'Mauricio',
      lastname: 'Pauluk'
    },
    item: {
      id: product.data.id,
      title: product.data.title,
      price: { 
        currency: product.data.currency_id, 
        amount: product.data.price, 
        decimals: product.data.price,
        }, 
      picture: product.data.thumbnail, 
      condition: product.data.condition, 
      free_shipping: product.data.shipping.free_shipping, 
      sold_quantity: product.data.sold_quantity,
      description: description.data.plain_text
    }
  }

  res.json(response)  
}