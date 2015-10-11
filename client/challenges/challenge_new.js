Template.challengeNew.rendered = function() {
  // Initialise tags input
  $('.tags').tagsinput({
    typeaheadjs: {
      name: 'tags',
      minLength: 0,
      highlight: true,
      source: substringMatcher(challengeTags)
    },
    freeInput: false
  });
};

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

// validate attributes
var validateChallenge = function (challenge) {
  var errors = {};
  if (!challenge.title)
    errors.title = "Please fill in a title";
  if (!challenge.description)
    errors.description =  "Please fill in a description";
  return errors;
}

// find tags matches
var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;
    // an array that will be populated with substring matches
    matches = [];
    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');
    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
	matches.push(str);
      }
    });
    cb(matches);
  };
};
