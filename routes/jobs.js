var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({jobs: [
      {
        company: 'Clevertech',
        from: 'Remote — Since Sep 2014',
        job: 'Javascript Developer',
        description: 'As a developer I\'ve been involved in several projects, working as frontend and or backend developer. Sometimes in charge of the entire project development, and sometimes as part of team. Main tasks: communicating with clients, designing, coding and maintaining existing APIs and apps.',
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
        description: 'While working in Globant, I learned the basics of Javascript, involved in the development of two apps for big companies like Deloitte and K12. Main tasks were working as a frontend developer and help technical lead coordinate work with other team members and clients. ',
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
        description: 'As a LAMP developer, I was in charge of talking with clients, planning and developing app that best solved clients needs.',
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
        description: 'Started as a Jr PHP developer, in charge of small website proyects, and in 2007 became the person in charge of the development sector, with 12 devs under my lead.',
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
