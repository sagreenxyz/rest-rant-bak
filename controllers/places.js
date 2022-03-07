const router = require('express').Router();

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/h-thai-ml-tables.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee-cat.jpg'
    }]
    // https://pixabay.com/photos/coffee-cafe-cat-milk-drink-hot-1711012/
    res.status(200).render('places/index', { places });
});

router.post('/', (req, res) => {
    res.send('POST /places stub')
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

module.exports = router;
