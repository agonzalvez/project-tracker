var formEl = $('');
var projectNameEl = $('');
var projectTypeEl = $('');
var hourlyRateEL = $('');
var dueDateEL = $('');
var projects = []

var handleFormSubmit = function (event) {
    event.preventDefault();
  
    //var projectName = projectNameEl.val();
    //var projectType = projectTypeEl.val();
    //var hourlyRate = hourlyRateEL.val();
    //var dueDate = dueDateEL.val();

    var project = {
        projectName: projectNameEl.val(),
        projectType: projectTypeEl.val(),
        hourlyRate: hourlyRateEL.val(),
        dueDate: dueDateEL.val()
    }
  
    if (!nameInput || !dateInput) {
      console.log('You need to fill out the form!');
      return;
    }
    

    projectNameEl.val('');
    projectTypeEl.val('');
    hourlyRateEL.val('');
    dueDateEL.val('');
  };
  
  formEl.on('submit', handleFormSubmit);