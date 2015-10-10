Template.projectList.helpers({
  pathForProject: function() {
    var project = this;
    var params = {
        projectId: project._id
    };
    var routeName = "project";
    var path = FlowRouter.path(routeName, params);

    return path;
  }
});