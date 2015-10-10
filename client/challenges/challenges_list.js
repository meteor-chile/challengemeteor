Template.challengesList.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('challenges');
  });
});
Template.challengesList.helpers({
  challengesList: function () {
    return Challenge.find({ });
  }
});
