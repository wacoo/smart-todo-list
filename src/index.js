import './style.css';
import tasks from './tasks.js';
import Display from './display.js';

const display = new Display();

/* updateTasks = () => {
    for (let i = 0; i < tasks.taskCollection.length; i += 1) {
      const description = document.getElementById('desc');
      description.addEventListener('keypress', (event) => {
        if (event.key === 'enter') {
          const task = new OneTask();
          task.description = description.value;
          task.completed = chk.value;
          task.index = tasks.index;
          tasks.taskCollection.push(task);
          this.populatePage();
        }
      });
    }
} */

tasks.restoreData();
display.populatePage();
// display.addEnterListener();
// updateTasks();