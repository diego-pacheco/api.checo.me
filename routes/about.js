var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({about: {
    title: 'DIEGO PACHECO SIRI',
    subtitle: 'JAVASCRIPT DEVELOPER',
    paragraphs: [
      'Hi my name is Diego Pacheco, I\'m a 35 years old developer from Montevideo, Uruguay. I\'m a proud husband and father of two great boys: Manuel 4 years old and Lorenzo 3 months old baby.',
      'I started working 14 years ago as a Junior LAMP developer and in the last four years I\'ve being focusing on web development with Javascript.',
      'I describe myself as an easy going guy, a team player always willing to go the extra mile and help my team mates. Interested in evolving as a developer and keep learning new technologies/frameworks.',
      'On my free time I enjoy spending time with my family and from time to time I like brewing my own beer.'
    ]
  }});
});

module.exports = router;
