let taskManager = new TaskManager();
taskManager.load();
taskManager.render();

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
    taskManager.save();

    //  TESTING
    //console.log(taskManager.tasks);
    //const taskHtml = createTaskHtml(taskManager.tasks[0].name, taskManager.tasks[0].description, taskManager.tasks[0].assign, taskManager.tasks[0].dueDate, taskManager.tasks[0].status);
    //console.log(taskHtml);


    //  Resets input fields after submit
    document.getElementById("form").reset();

    //  Render task list in html after submit
    taskManager.render();
    
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


// LISTEN FOR SUBMIT BUTTON CLICK
const submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', submitFunction);

// TASK LIST BUTTON
const taskList = document.querySelector('#task-list');
taskList.addEventListener('click', (event) => { 
  if(event.target.classList.contains('done-button')) {
    //event.target.parentElement
    //console.log(event.target.parentElement.parentElement);
    const parentTask = event.target.parentElement.parentElement;
    const taskId = Number(parentTask.dataset.taskId);
    const task = taskManager.getTaskById(taskId);
    //change status to done
    task.stat = 'Done';
    taskManager.render();
    taskManager.save();

      
  };

  if (event.target.classList.contains('delete-button')) {
      const parentTask = event.target.parentElement.parentElement;
      const taskId = Number(parentTask.dataset.taskId);
      taskManager.deleteTask(taskId);
      taskManager.save();
      taskManager.render();
    
  }
}
);


const completeList = document.querySelector('#complete-list');
completeList.addEventListener('click', (event) => { 
  
  if (event.target.classList.contains('delete-button')) {
      const parentTask = event.target.parentElement.parentElement;
      const taskId = Number(parentTask.dataset.taskId);
      taskManager.deleteTask(taskId);
      taskManager.save();
      taskManager.render();
    
  }
}
);


console.log(taskManager);