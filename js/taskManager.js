const createTaskHtml = (name, desc, assign, due, stat) => {
  const html = `
  <li class="list-group-item bg-light card" style="width: 30rem;">
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
    addTask(name, desc, assign, due, stat = 'To Do') {
      this.currentId ++;
      const task = {
        name: name,
        desc: desc,
        assign: assign,
        due: due,
        stat: stat
      };
      this.tasks.push(task);
    }

    render() {
      const tasksHtmlList = [];
      this.tasks.forEach(task => {
        //  Create Date object from due date input
        const dueDate = new Date(task.due);
        //  Format the date
        const formattedDate = dueDate.toDateString();
        //  Create HTML string for current task
        const taskHtml = createTaskHtml(task.name, task.desc, task.assign, formattedDate, task.stat);
        //  Push HTML string to array
        tasksHtmlList.push(taskHtml);
      });
      //  Join all array elemnts with new line in between
      const taskHtml = tasksHtmlList.join('\n');
      //  Find class=task-list in index.html and replace with our HTML string
      document.getElementById("task-list").innerHTML = taskHtml;
    }
}
// TESTING
// const taskManager = new TaskManager();
// taskManager.addTask('name', 'desc','assigned', 'due');
// console.log(taskManager.tasks[0].name);
// console.log(taskManager.tasks[0].description);

