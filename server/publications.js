Meteor.publish('challenges', function() {
  return Challenge.find({});
  return this.ready();
});

