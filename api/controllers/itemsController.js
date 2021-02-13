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
          resp.data.results.forEach((result, index) => {
            if(index < 4){
              categories.push(result.category_id);
              const decimals =  result.price - Math.floor(result.price);
              items.push({
                id: result.id,
                title: result.title,
                price: { 
                  currency: result.currency_id, 
                  amount: Math.floor(result.price),
                  decimals: Number.parseFloat(decimals.toFixed(2))
                },
                picture: result.thumbnail, 
                condition: result.condition, 
                free_shipping: result.shipping.free_shipping, 
              })
            }
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
  let description = '';
  let product = ''
  try {
    description = await axios.get(`${process.env.API_MELI}/items/`+ id + '/description');
  }catch{
    description = null;
  }

  try {
    product = await axios.get(`${process.env.API_MELI}/items/`+ id);

    let decimals =  product.data.price - Math.floor(product.data.price);
    decimals = parseFloat(Math.round(decimals * 100)/ 100).toFixed(2);
    decimals = parseInt(decimals.toString().substring(2));

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
          amount: Math.floor(product.data.price),
          decimals: decimals
        }, 
        picture: product.data.thumbnail, 
        condition: product.data.condition, 
        free_shipping: product.data.shipping.free_shipping, 
        sold_quantity: product.data.sold_quantity
      }
    }

    if(description){
      response.item.description = description.data.plain_text;
    }
    
    res.json(response);
  }catch(error){
    res.json(error.message);
  }
}