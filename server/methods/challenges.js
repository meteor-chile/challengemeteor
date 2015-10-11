Meteor.methods({
  challengeInsert: function(challengeAttributes) {

    var tags = challengeAttributes.tags;
    challengeAttributes = _.omit(challengeAttributes, "tags");

    // validations single attributes
    check(challengeAttributes, {
      title: String,
      description: String
    });

    // validate tags array
    var validTags = _.all(tags, function(tag){
      return _.include(challengeTags, tag);
    })
    if(!validTags)
      throw new Meteor.Error('invalid-challenge', "You must set a valid array for you challenge");

    var user = Meteor.user();
    var challenge = _.extend(challengeAttributes, {
      userId: user._id,
      tags: tags
    });

    var challengeId = Challenge.insert(challenge);
    return {
      _id: challengeId
    };
  }
});
