var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({jobs: [
      {
        company: 'Clevertech',
        from: 'Remote — Since Sep 2014',
        job: 'Javascript Developer',
        description: 'Since I started working at Clevertech, I\'ve being envolved in several project as backend and frontend developer. I\'ve worked designing APIs, communicating with third party services, creating Slack bots, Angular and React apps.',
        avatar: 'clevertech.jpg',
        index: 0,
        chips: [{
          tech: 'NodeJS'
        },{
          tech: 'Express'
        },{
          tech: 'MongoDB'
        },{
          tech: 'ReactJS'
        },{
          tech: 'AngularJS'
        },{
          tech: 'Git'
        },{
          tech: 'PostgreSQL'
        },{
          tech: 'CoffeeScript'
        },{
          tech: 'SlackBot API'
        },{
          tech: 'Redis'
        }]
      },
      {
        company: 'Globant',
        from: 'Remote — Apr 2013 - Sep 2014',
        description: 'While working in Globant, I learned the basics of Javascript, developing two apps for big companies like Deloitte and K12. Main job was working as a frontend developer and help dev lead coordinate with other developers in the team.',
        job: 'Frontend Developer',
        avatar: 'globant.jpg',
        index: 1,
        chips: [{
          tech: 'BackboneJs'
        },{
          tech: 'MarionetteJs'
        },{
          tech: 'LESS'
        },{
          tech: 'SASS'
        },{
          tech: 'Bootstrap'
        },{
          tech: 'Yeoman'
        },{
          tech: 'Gulp'
        },{
          tech: 'Grunt'
        }]
      },
      {
        company: 'Soluciones Linux',
        from: 'Montevideo, Uruguay — Feb 2008 - Apr 2013',
        description: 'Worked as main LAMP developer, where I was in charge of talking with the client, planning and developing the best solution.',
        job: 'Lamp Developer',
        avatar: 'soluciones.jpg',
        index: 2,
        chips: [{
          tech: 'PHP'
        },{
          tech: 'MySQL'
        },{
          tech: 'SVN'
        },{
          tech: 'PostgreSQL'
        },{
          tech: 'JQuery'
        },{
          tech: 'HTML5'
        }]
      },
      {
        company: 'SX Networks',
        from: 'Montevideo, Uruguay — Apr 2003 - Feb 2008',
        description: 'As a Jr PHP developer, I started building small PHP/HTML sites. Over time I developed their first casino referal panel, where stats and payments where processed. Also I was involved in the development the first hispanic community web: Wamba.',
        job: 'LAMP Developer',
        avatar: 'sx.jpg',
        index: 3,
        chips: [{
          tech: 'PHP'
        },{
          tech: 'MySQL'
        },{
          tech: 'SVN'
        },{
          tech: 'PostgreSQL'
        },{
          tech: 'JQuery'
        },{
          tech: 'HTML5'
        }]
      }
    ]
  });
});

module.exports = router;
