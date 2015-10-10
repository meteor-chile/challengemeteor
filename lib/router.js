FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "home"});
  }
});

// projects
FlowRouter.route('/projects', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "project_list"});
  }
});
FlowRouter.route('/:projectId', {
	name: 'project',
  action: function() {
    BlazeLayout.render("mainLayout", {content: "project_item"});
  }
});