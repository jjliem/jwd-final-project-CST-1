// function validFormFieldInput(data) {
//   const newTaskNameInput = document.querySelector('#newTaskNameInput');


//   const taskName = newTaskNameInput.value;



//   console.log("name:  " + taskName);

//   document.getElementById("myForm").reset();
// }

let task1 = new TaskManager();


function validFormFieldInput(data) {
  //  Select form elements with querySelector
  const newTaskNameInput = document.querySelector('#newTaskNameInput');
  const newDescriptionInput = document.querySelector('#newDescriptionInput');
  const newAssignedToInput = document.querySelector('#newAssignedToInput');
  const newDueDateInput = document.querySelector('#newDueDateInput');
  const submitButton = document.querySelector('#submitButton');
  const warning = document.querySelector('#warning');


  //  Get values from form and save into variables
  const taskName = newTaskNameInput.value;
  const description = newDescriptionInput.value;
  const assignedTo = newAssignedToInput.value;
  const dueDate = newDueDateInput.value;

  //  Check if all input fields are valid, else display warning
  if (taskName && description && assignedTo && dueDate) {
    warning.style.display = 'none';
    task1.addTask(taskName, description, assignedTo, dueDate)
    console.log(task1.tasks);
    document.getElementById("form").reset();
  } else {
    warning.style.display = 'block';
  }

}