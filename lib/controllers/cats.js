const { Router } = require('express');
const  Cat  = require('../models/Cat');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const Cats = await Cat.getById(req.params.id);
    res.json(Cats); 
  })

  .get('/', async (req, res) => {
    const cats = await Cat.getAll();
    
    res.json(cats);
  });
