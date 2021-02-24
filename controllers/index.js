// use express dependency and its Routing feature to parse url's
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage' });
});

/* GET /nick */
router.get('/nick', (req, res, next) => {
  res.render('nick', {
    title: 'About Nick',
    pageText: 'Nick is a Web Design / Programmer college student at Barrie Campus. Nick is well experienced in HTML5,CSS3 and JS es6+.'
  })
})
/* Get /project*/
router.get('/project', (req, res, next) => {
  res.render('project', {
    title2: 'Projects',
    pageText2: 'This is my Project Page!'
  })
})
/* Get /contact*/
router.get('/contact', (req, res, next) => {
  res.render('contact', {
    title3: 'Contact',
    pageText3: 'This is my contact page!'
  })
})
module.exports = router;
