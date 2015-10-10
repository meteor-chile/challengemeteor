Template.projectList.helpers({
  projectPath: function() {
    var project = this;
    var params = {
        projectId: project._id
    };
    var routeName = "project";
    var path = FlowRouter.path(routeName, params);

    return path;
  },
  projects: function () {
    return Project.find();
  }
});

Template.projectList.onCreated(function () {
 var self = this;
 self.autorun(function () {
   self.subscribe('projects');
 });
});