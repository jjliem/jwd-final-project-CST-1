const assert = require('assert');
const TaskManager = require('../js/taskManager.js');

describe('TaskManager', () => {
    describe('.addTask', () => {
        it('adds new tasks when user submits new task', () => {
            //test
            const taskManager = new TaskManager();
            const taskName = 'Finish Codecademy';
            const desc = 'Finish all projects';
            const assign = 'Rita';
            const due = '2-15-21';
            const stat = 'Done';
            taskManager.addTask(taskName, desc, assign, due, stat);
            const result = taskManager.tasks; 
            const expected = [{id: 1,name:'Finish Codecademy',desc:'Finish all projects', assign:'Rita', due:'2-15-21', stat:'Done'}];
            assert.deepEqual(result, expected);
        });
        
    });
   
    });

 
    describe('.deleteTask', () => {
        it('deletes tasks when user clicks delete button', () => {
            //test
            const taskManager = new TaskManager();
            const taskName = 'Finish Codecademy';
            const desc = 'Finish all projects';
            const assign = 'Rita';
            const due = '2-15-21';
            const stat = 'Done';
            taskManager.addTask(taskName, desc, assign, due, stat);
            taskManager.deleteTask(1);
            const result = taskManager.tasks.length; 
            const expected = 0;
            assert.deepEqual(result, expected);
            });
            
        });

    describe('.getTaskById', () => {
        it('selects tasks by their given Id', () => {
            //test
            const taskManager = new TaskManager();
            const currentId = 1;
            const taskName = 'Finish Codecademy';
            const desc = 'Finish all projects';
            const assign = 'Rita';
            const due = '2-15-21';
            const stat = 'Done';
            taskManager.addTask(taskName, desc, assign, due, stat);
            const result = taskManager.getTaskById(currentId);
            const expected = {id: 1,name:'Finish Codecademy',desc:'Finish all projects', assign:'Rita', due:'2-15-21', stat:'Done'};
            assert.deepEqual(result, expected);
            });
            
        });

        const taskmanager = new TaskManager();
        
       
       

