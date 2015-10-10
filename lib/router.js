// challenges
FlowRouter.route('/', {
	action: function() {
		BlazeLayout.render("mainLayout", {header: "header", content: "home"});
	}
});
FlowRouter.route('/challenges/:challengeId', {
	name: 'challengeItem',
	action: function() {
		BlazeLayout.render("mainLayout", {header: "header", content: "challengeItem"});
	}
});
FlowRouter.route('/challenges/new', {
	triggersEnter: [AccountsTemplates.ensureSignedIn],
	name: 'challengeNew',
	action: function() {
		BlazeLayout.render("mainLayout", {header: "header", content: "challengeNew"});
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
