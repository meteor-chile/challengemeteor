Template.projectItem.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var projectId = FlowRouter.getParam('projectId');
    self.subscribe('project', projectId);
  });
});


Template.projectItem.helpers({
  project: function () {
    var projectId = FlowRouter.getParam('projectId');
    var project = Project.findOne({_id: projectId}) || {};
    return project;
  }
});
