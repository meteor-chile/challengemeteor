Template.registerHelper('inCalendar', function(date) {
  if (date)
    return moment(date).format('LL');
});