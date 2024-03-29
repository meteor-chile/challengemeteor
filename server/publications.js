Meteor.publish('challenges', function() {
  return Challenge.find({});
  return this.ready();
});

Meteor.publish('challenge', function(challengeId) {
  return Challenge.find({ _id: challengeId });
  return this.ready();
});

Meteor.publish('projects', function() {
  return Project.find();
  return this.ready();
});

Meteor.publish('project', function(projectId) {
  return Project.find({ _id: projectId });
  return this.ready();
});
