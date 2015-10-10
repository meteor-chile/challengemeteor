Meteor.startup(function() {
    var pedro;
    var felipe;
    var challenges = [];
    var users = [];

   if (Meteor.users.find().count() === 0) {

    var users = [
      {firstname: 'Pedro', lastname:'Perez', fullName: 'Pedro Perez', email:'pedro@challengemeteor.com', roles:['user']},
      {firstname: 'Olivers', lastname:'De Abreu', fullName: 'Olivers De Abreu', email: 'olivers@challengemeteor.com', roles:['mou', 'admin']},
      {firstname: 'Felipe', lastname:'Campos', fullName: 'Felipe Campos', email: 'felipe@challengemeteor.com', roles:['mou', 'admin']},
      {firstname: 'Cristian', lastname:'Orellana', fullName: 'Cristian Orellana', email:'cristian@challengemeteor.com', roles:['admin']},
    ];

    _.each(users, function(userData) {
      var userId = Accounts.createUser({
        email: userData.email,
        password: 'elab2015',
        username: userData.email
      });

      users.push(userId);

      Meteor.users.update({_id:userId}, {$set:{'emails.0.verified':true, profile:{
          firstname: userData.firstname,
          lastname: userData.lastname,
          name:userData.fullName
        }}});

      if (userData.firstname === 'Pedro') {
        pedro = Meteor.users.findOne(userId);
      }

      if (userData.firstname === 'Felipe') {
        felipe = Meteor.users.findOne(userId);
      }

    });
  }

  if (Challenge.find().count() == 0) {
    var tags = ['users', 'seo', 'frontend', 'server', 'router', 'history', 'analytics'];
    var likes = [0, 10, 100, 20, 30, 5, 24, 33, 87];
    for (var i = 0; i<101; i++) {
      var cId = Challenge.insert ({
            title: Fake.word(),
            description: Fake.paragraph(5),
            userId: _.sample(users),
            tags: [
              _.sample(tags)
            ],
            likes: _.sample(likes),
            createdAt: new Date(),
            updatedAt: new Date()
        }
      );

      challenges.push(cId);

    }
  }

  if (Project.find().count() == 0) {
    var users = [pedro, felipe];
    var likes = [0, 10, 100, 20, 30, 5, 24, 33, 87];
    for (var i = 0; i<101; i++) {
      Project.insert ({
            title: Fake.word(),
            description: Fake.paragraph(5),
            challengeId: _.sample(challenges),
            userId: _.sample(users),
            tags: [
              _.sample(tags)
            ],
            likes: _.sample(likes),
            createdAt: new Date(),
            updatedAt: new Date()
        }
      );
    }
  }
});