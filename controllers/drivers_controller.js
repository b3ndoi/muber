

module.exports = {

  greeting(req, res){
    res.send({hi: 'there'})
  },

  create(req, res){
    console.log(req.body);
    res.sendStatus(201);
  }

};
