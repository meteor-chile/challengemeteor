Template.challengeNew.events({
  'submit form': function(e) {
    e.preventDefault();

    var challenge = {
      title: $(e.target).find('[name=title]').val(),
      description: $(e.target).find('[name=description]').val()
    };

    Meteor.call('challengeInsert', challenge, function(error, result) {
      FlowRouter.go('/');
    });
  }
});
