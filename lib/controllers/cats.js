const { Router } = require('express');
const { cats } = require('../../data/cats');

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const matchingCat = cats.find((cat) => cat.id === id);
    res.json(matchingCat); 
  })

  .get('/', (req, res) => {
    const catData = cats.map(({ id, name }) => ({ id, name }));
    res.json(catData);
  });
