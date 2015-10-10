FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {header: "header", content: "home"});
  }
});

// projects
FlowRouter.route('/projects', {
	name: 'projects',
  action: function() {
    BlazeLayout.render("mainLayout", {header: "header", content: "projectList"});
  }
});
FlowRouter.route('/:projectId', {
	name: 'project',
  action: function() {
    BlazeLayout.render("mainLayout", {header: "header", content: "projectItem"});
  }
});
