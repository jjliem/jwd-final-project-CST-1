let taskManager = new TaskManager();


function submitFunction() {
  //  Select Form Elements 
  const newTaskNameInput = document.querySelector('#newTaskNameInput');
  const newDescriptionInput = document.querySelector('#newDescriptionInput');
  const newAssignedToInput = document.querySelector('#newAssignedToInput');
  const newDueDateInput = document.querySelector('#newDueDateInput');
  const warning = document.querySelector('#warning');


  //  Save Values
  const taskName = newTaskNameInput.value;
  const description = newDescriptionInput.value;
  const assignedTo = newAssignedToInput.value;
  const dueDate = newDueDateInput.value;


  //  Validate Form
  const formFilled = validFormFieldInput(taskName, description, assignedTo, dueDate);
  
  
  //  If valid, hide alert, add task to array, reset form
  if (formFilled) {
    warning.style.display = 'none';
    taskManager.addTask(taskName, description, assignedTo, dueDate)

    //  TESTING
    console.log(taskManager.tasks);

    document.getElementById("form").reset();
  } else {
    warning.style.display = 'block';
  }
}


function validFormFieldInput(taskName, description, assignedTo, dueDate) {
  if (taskName && description && assignedTo && dueDate) {
    return true;
  } else {
    return false;
  }
}


//  LISTEN FOR SUBMIT BUTTON CLICK
const submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', submitFunction);