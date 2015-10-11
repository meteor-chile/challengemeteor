// challenges

const authenticatedRedirect = function(){
  if ( !Meteor.loggingIn() && !Meteor.userId() ) {
    FlowRouter.go( 'login' );
  }
};

const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [ authenticatedRedirect ]
});

FlowRouter.route('/', {
	action: function() {
		BlazeLayout.render("mainLayout", {header: "header", content: "home"});
	}
});
authenticatedRoutes.route('/challenges/new', {
	name: 'challengeNew',
	action: function() {
		BlazeLayout.render("mainLayout", {header: "header", content: "challengeNew"});
	}
});
FlowRouter.route('/challenges/:challengeId', {
	name: 'challengeItem',
	action: function() {
		BlazeLayout.render("mainLayout", {header: "header", content: "challengeItem"});
	}
});
// projects
FlowRouter.route('/projects', {
	name: 'projects',
	action: function() {
		BlazeLayout.render("mainLayout", {header: "header", content: "projectList"});
	}
});
FlowRouter.route('/projects/:projectId', {
	name: 'project',
	action: function() {
		BlazeLayout.render("mainLayout", {header: "header", content: "projectItem"});
	}
});

FlowRouter.route('/login', {
  name: 'login',
  action: function() {
    return BlazeLayout.render("mainLayout", {header: "header", content: "login"});
  }
});

