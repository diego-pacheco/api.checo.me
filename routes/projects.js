var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({projects: [
    {
      title: 'Insure Street',
      url: 'http://insurestreet.co/',
      description: 'Actually working on this project as a NodeJS dev, maintaining the existing API and connecting with third party services.',
      image: 'insurestreet.jpg'
    },
    {
      title: 'DKMS',
      url: 'https://dkmsgetinvolved.org/',
      description: 'Worked as a Node/React developer, developing the API to store the donors information and reports generation. Also worked with another React developer on the frontend registration app.',
      image: 'dkms.jpg'
    },
    {
      title: 'Our Harvest',
      url: 'https://ourharvest.com/',
      description: 'Worked as frontend and backend developer, maintaining existing code and adding new features, like loyalty points for recurring custumers and user experience improvements.',
      image: 'ourharvest.jpg'
    },
    {
      title: 'Mirror App',
      url: 'https://itunes.apple.com/uy/app/mirror-team-performance/id1013251717',
      description: 'Parse server migration of the existing app a new server, bug fixing and development of new features.',
      image: 'mirror.jpg'
    }
  ]});
});

module.exports = router;