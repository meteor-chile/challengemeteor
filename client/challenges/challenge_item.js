Template.challengeItem.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var challengeId = FlowRouter.getParam('challengeId');
    self.subscribe('challenge', challengeId);
  });
});

Template.challengeItem.helpers({
  challenge: function () {
    var challengeId = FlowRouter.getParam('challengeId');
    var challenge = Challenge.findOne({_id: challengeId}) || {};
    return challenge;
  }
});
