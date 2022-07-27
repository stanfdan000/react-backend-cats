const { Router } = require('express');
const { Cats } = require('../models/Cats');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const Cats = await Cats.getById(req.params.id);
    res.json(Cats); 
  })

  .get('/', async (req, res) => {
    const cats = await Cats.getAll();
    const ids = cats.map((cats) => ({ id: cats.id, name: cats.name }));
    res.json(ids);
  });
