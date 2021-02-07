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
  const assign = newAssignedToInput.value;
  const dueDate = newDueDateInput.value;


  //  Validate Form
  const formFilled = validFormFieldInput(taskName, description, assign, dueDate);
  
  
  //  If valid, hide alert, add task to array, reset form
  if (formFilled) {
    warning.style.display = 'none';
    taskManager.addTask(taskName, description, assign, dueDate);
    
    const taskHtml = createTaskHtml(taskManager.tasks[0].name, taskManager.tasks[0].description, taskManager.tasks[0].assign, taskManager.tasks[0].dueDate, taskManager.tasks[0].status);

    //  TESTING
    //console.log(taskManager.tasks);
    console.log(taskHtml);

    document.getElementById("form").reset();

    
  } else {
    warning.style.display = 'block';
  }
}




function validFormFieldInput(taskName, description, assign, dueDate) {
  if (taskName && description && assign && dueDate) {
    return true;
  } else {
    return false;
  }
}


//  LISTEN FOR SUBMIT BUTTON CLICK
const submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', submitFunction);