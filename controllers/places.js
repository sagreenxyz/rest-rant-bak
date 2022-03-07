const router = require('express').Router();
const places = require('../models/places.js');

router.get('/', (req, res) => {
    res.status(200).render('places/index', { places });
});

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places stub')
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

module.exports = router;
