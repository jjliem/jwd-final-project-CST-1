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
  
}

const taskArray = new TaskManager();

taskArray.addTask('get groceries', 'des', 'due', 'done');
taskArray.addTask('ballet', 'des', 'due', 'to-do');
taskArray.addTask('soccer practice', 'des', 'due', 'in-process');

console.log(taskArray);

