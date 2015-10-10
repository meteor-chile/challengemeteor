Meteor.methods({
  challengeInsert: function(challengeAttributes) {
    check(challengeAttributes, {
      title: String,
      description: String
    });

    var user = Meteor.user();
    var challenge = _.extend(challengeAttributes, {
      userId: user._id,
    });

    var challengeId = Challenge.insert(challenge);
    return {
      _id: challengeId
    };
  }
});


validateChallenge = function (challenge) {
  var errors = {};
  if (!challenge.title)
    errors.title = "Please fill in a title";
  if (!challenge.description)
    errors.description =  "Please fill in a description";
  return errors;
}
