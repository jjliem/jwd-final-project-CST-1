const createTaskHtml = (id, name, desc, assign, due, stat) => {
  const html = `
  <li class="list-group-item bg-light card" style="width: 30rem;" data-task-id="${id}">
  <div class="card-body">
    <h4 class="card-title">${name}</h4>
    <!--Dropdown buttons-->
    <!-- <div class="dropdown float-right">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown button
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">To-Do</a>
        <a class="dropdown-item" href="#">In progress</a>
        <a class="dropdown-item" href="#">Review</a>
        <a class="dropdown-item" href="#">Complete</a>
      </div>
    </div> -->
    <h6 class="card-assignment">Description: ${desc}</h6>
    <h6 class="card-assignment">Assigned To: ${assign}</h6>
    <h6 class="card-assignment">Status: ${stat}</h6>
    <h6 class="card-assignment text-right">Due: ${due}</h6>
    <button type="button" class="btn btn-success done-button">Mark as done</button>
    <button type="button" class="btn btn-danger delete-button">Delete</button>
  </div>
</li>
  `
  return html;
};

class TaskManager {
  constructor(currentId = 0) {
      this.tasks = [];
      this.currentId = currentId;
  }


    //  Gets values from form, stores values in object, pushes to array
    addTask(name, desc, assign, due, stat = 'To Do') {
      this.currentId ++;
      const task = {
        id: this.currentId,
        name: name,
        desc: desc,
        assign: assign,
        due: due,
        stat: stat
      };
      this.tasks.push(task);
    }


    //  For every task in array, format date, create HTML card, and display in task-list
    render() {
      const tasksHtmlList = [];
      this.tasks.forEach(task => {
        //  Create Date object from due date input
        const dueDate = new Date(task.due);
        //  Format the date
        const formattedDate = dueDate.toDateString();
        //  Create HTML string for current task
        const taskHtml = createTaskHtml(task.id, task.name, task.desc, task.assign, formattedDate, task.stat);
        //  Push HTML string to array
        tasksHtmlList.push(taskHtml);
      });
      //  Join all array elemnts with new line in between
      const taskHtml = tasksHtmlList.join('\n');
      //  Find class=task-list in index.html and replace with our HTML string
      document.getElementById("task-list").innerHTML = taskHtml;
    }


    //  Return task based on DONE button that was pressed
    getTaskById(taskId) {
      let foundTask;
      this.tasks.forEach(task => {
        if (task.id === taskId) {
          foundTask = task;
        }
      });
      return foundTask;
    }


    //  Save this.tasks and this.currentId into JSON strings
    save() {
      const tasksJson = JSON.stringify(this.tasks);
      localStorage.setItem('tasks', tasksJson);
      const currentId = JSON.stringify(this.currentId);
      localStorage.setItem('currentId', currentId);
    }


    //  Convert JSON tasks and currentId to array and number
    load() {
      if (localStorage.getItem('tasks')) {
        const tasksJson = localStorage.getItem('tasks');
        this.tasks = JSON.parse(tasksJson);
      }
      if (localStorage.getItem('currentId')) {
        const currentId = localStorage.getItem('currentId');
        this.currentId = Number(currentId);
      }
    }


    //  Delete a task from the list
    deleteTask (taskId) {
      const newTasks = [];
      this.tasks.forEach(task => {
        if (task.id != taskId) {
          newTasks.push(task);
        }
        this.tasks = newTasks;
      });
    }
}
// TESTING
// const taskManager = new TaskManager();
// taskManager.addTask('name', 'desc','assigned', 'due');
// console.log(taskManager.tasks[0].name);
// console.log(taskManager.tasks[0].description);

