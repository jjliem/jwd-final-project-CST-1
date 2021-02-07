const createTaskHtml = (name, desc, assign, due, stat) => {
  const html = `
  <li class="list-group-item card" style="width: 30rem;">
  <div class="card-body">
    <h4 class="card-title">Task Name: ${name}</h4>
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
    <h6 class="card-assignment">Assigned To: ${assign}</h6>
    <h6 class="card-assignment">Description: ${desc}</h6>
    <h6 class="card-assignment text-right">Due: ${due}</h6>
    <h6 class="card-assignment">Status: ${stat}</h6>
    <a href="#" class="btn btn-primary">Delete</a>
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
      this.currentId ++
      const taskName = {
        name: name,
        description: desc,
        assign: assign,
        dueDate: due,
        status: stat
      }
      this.tasks.push(taskName);
    }

    render() {
      const tasksHtmlList = [];
      tasksHtmlList.forEach(task => {
        console.log(element)
      });
    }
}
// TESTING
// const taskManager = new TaskManager();
// taskManager.addTask('name', 'desc','assigned', 'due');
// console.log(taskManager.tasks[0].name);
// console.log(taskManager.tasks[0].description);

