FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {header: "header", content: "home"});
  }
});
