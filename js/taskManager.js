class TaskManager {
  constructor(currentId = 0) {
      this.tasks = [];
      this.currentId = currentId;
  }
    addTask(jobName, desc, assign, due, stat = 'To Do') {
      this.currentId ++
      const taskName = {
        name: jobName,
        description: desc,
        aissgnTo: assign,
        dueDate: due,
        status: stat
      }
      this.tasks.push(taskName);
    }
}
// TESTING
// const taskManager = new TaskManager();
// taskManager.addTask('name', 'desc','assigned', 'due');
// console.log(taskManager.tasks[0].name);
// console.log(taskManager.tasks[0].description);

