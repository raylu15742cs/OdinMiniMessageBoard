var express = require('express');
var router = express.Router();

const messages = [
  {
    topic: 'Welcome to the Messaging Board',
    text: 'You can add your own message whenever you want with the new message button',
    user: 'Raymond Lu',
    added: new Date().toDateString(),
  },
  {
    topic: 'My First Node.JS Project',
    text: 'This is my first Node.JS Project, I hope you like it',
    user: 'Raymond Lu',
    added: new Date().toDateString(),
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Your Message Board', messages: messages });
});

router.post('/new', function(req, res, next) {
  const { text, user } = req.body;
  messages.push({ text,topic, user, added: new Date().toDateString() });
  res.redirect('/');
})
module.exports = router;
