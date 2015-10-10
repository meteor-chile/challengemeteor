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
