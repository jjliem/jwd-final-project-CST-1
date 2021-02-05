class TaskManager {
  constructor(currentId = 0) {
      this.tasks = [];
      this.currentId = currentId;
  }
    addTask(jobName, desc, assign, due, stat) {
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
  

  addTask(name, description, assignedTo, dueDate, status = 'TODO') {
    this.currentId++;
    this.tasks.push(
      { id: this.currentId, 
        name: name, 
        description: description, 
        assignedTo: assignedTo, 
        dueDate: dueDate, 
        status: status }
    );
  };
}
// TESTING
// const taskManager = new TaskManager();
// taskManager.addTask('name', 'desc','assigned', 'due');
// console.log(taskManager.tasks[0].name);
// console.log(taskManager.tasks[0].description);

