var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({projects: [
    {
      title: 'Insure Street',
      url: 'http://insurestreet.co/',
      description: 'Actually working on this project as a NodeJS dev, maintaining the existing API and connecting third party APIs.',
      image: 'insurestreet.jpg'
    },
    {
      title: 'DKMS',
      url: 'https://dkmsgetinvolved.org/',
      description: 'Worked as a Node/React developer, developing the API to store the donors information and returning some stats. Also worked with another React developer on the registration app.',
      image: 'dkms.jpg'
    },
    {
      title: 'Our Harvest',
      url: 'https://ourharvest.com/',
      description: 'Worked in the frontend and backend side, maintaining existing code and adding new features, like loyalty points for recurring clients. Improvements to user experience.',
      image: 'ourharvest.jpg'
    },
    {
      title: 'Mirror App',
      url: 'https://itunes.apple.com/uy/app/mirror-team-performance/id1013251717',
      description: 'Migrated the existing Parse server to clients server, bug fixing and adding new features.',
      image: 'mirror.jpg'
    }
  ]});
});

module.exports = router;