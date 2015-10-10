Meteor.publish('challenges', function(postId) {
  return Challenge.find();
});
