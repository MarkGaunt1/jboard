const express = require ('express');
const router = express.Router();
const Vacs = require('../models/vacs');

router.get('/vacs', (req, res, next) => {

  //this will return all the data, exposing only the id and action field to the client
  Vacs.find({} )
    .then(data => res.json(data))
    .catch(next)
});

router.get('/vacs/:id', (req, res, next) => {

  //this will return just one vacancy data - searching via id

  Vacs.find({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
});

router.post('/vacs', (req, res, next) => {
  if(req.body.jobref){
    Vacs.create(req.body)
      .then(data => res.json(data))
      .catch(next)
  }else {
    res.json({
      error: "The job reference field is empty"
    })
  }
});

router.put('/vacs/:id', (req, res, next) => {
  Vacs.findOneAndUpdate({"_id": req.params.id}, req.body, {new: true})
    .then(data => res.json(data))
    .catch(next)
})


router.delete('/vacs/:id', (req, res, next) => {
  Vacs.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;