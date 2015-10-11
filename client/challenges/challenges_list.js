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

Template.challengesList.events({
  'click .like-plus': function(event) {
    console.log('plus');
    event.preventDefault();
    var cId = this._id;
    var like = {
      tId: cId,
      collection: 'challenge',
      type: 'plus'
    };
    Meteor.call('like', like, function(error, result) {
      if (error) {
        console.log(error);
        return;
      }
    });
  },
  'click .like-minus': function(event) {
    event.preventDefault();
    var cId = this._id;
    var like = {
      tId: cId,
      collection: 'challenge',
      type: 'minus'
    };
    Meteor.call('like', like, function(error, result) {
      if (error) {
        console.log(error);
        return;
      }
    });
  }
})
