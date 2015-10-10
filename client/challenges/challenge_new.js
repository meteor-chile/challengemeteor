Template.challengeNew.events({
  'submit form': function(e) {
    e.preventDefault();

    var challenge = {
      title: $(e.target).find('[name=title]').val(),
      description: $(e.target).find('[name=description]').val()
    };

    var errors = validateChallenge(challenge);
    if (errors.title || errors.description)
      return alert("You must set a title and description for your post");

    Meteor.call('challengeInsert', challenge, function(error, result) {
      FlowRouter.go('/');
    });
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
