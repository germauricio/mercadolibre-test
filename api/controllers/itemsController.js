const axios = require('axios');

exports.index = (req, res) => {
    const search = req.params.id
    axios({
        url: `${process.env.API_MELI}` + search,
        method: 'get',
      })
        .then(resp => {
          res.status(200).json(resp.data);
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