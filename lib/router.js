FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {header: "header", content: "home"});
  }
});

FlowRouter.route('/challenges/new', {
  name: 'challengeNew',
  action: function() {
    BlazeLayout.render("mainLayout", {header: "header", content: "challengeNew"});
  }
});
