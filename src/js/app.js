import Task from './Task';

const container = document.querySelector('.container');

const tasks = container.querySelectorAll('.task');
const task1 = tasks[0];

const containerTasks = document.createElement('div');
containerTasks.classList.add('container-tasks');
task1.appendChild(containerTasks);

const tasksTodo = new Task(containerTasks, 'todo');
const tasksInProgress = new Task(containerTasks, 'in progress');

// eslint-disable-next-line no-unused-vars
const tasksDone = new Task(containerTasks, 'done');

['1', '2', '3'].forEach((text) => tasksTodo.addCard(text));
['Задача 1', 'Задача 2'].forEach((text) => {
  tasksInProgress.addCard(text);
});
