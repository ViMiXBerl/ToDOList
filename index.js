const submitBtn = document.querySelector("#submitBtn");

let tasks = {};
let toDo = [];
let taskInProgress = [];
let taskDone = [];
let taskDeleted = [];

const addTaskToToDo = () => {
  submitBtn.addEventListener("click", () => {
    const headingTask = document.querySelector("#heading__task");
    const descriptionTask = document.querySelector("#description__task");

    toDo.push({
      headingTask: headingTask.value,
      descriptionTask: descriptionTask.value,
    });
    tasks.toDo = toDo;

    // console.log(tasks);
    // console.log(toDo);
    addTasks();
    checked();
  });
};
addTaskToToDo();
const addTasks = () => {
  const formToDo = document.querySelector("#formToDo");

  toDo.forEach((item) => {
    formToDo.innerHTML += `
    
    <input
      type="text"
      readonly
      autocomplete="on"
      class="heading__task"
      placeholder = "${item.headingTask}"
    />
    <input
      type="text"
      readonly
      autocomplete="on"
      class="description__task"
      placeholder = "${item.descriptionTask}"
    />
    <div class= "btn">
    <button class="btn__pancil"></button>
    <button class="btn__clear"></button>
    <button id="btn__checked"></button>
    </div>
    
  `;
  });
};

const checked = () => {
  const inProgressChecked = document.querySelector("#btn__checked");

  inProgressChecked.addEventListener("click", (event) => {
    event.preventDefault();

    taskInProgress = toDo.splice(0, 1);
    tasks.taskInProgress = taskInProgress;

    addTaskInProgress();
    deleteTaskFromToDo();
  });
};

const addTaskInProgress = () => {
  const formInProgress = document.querySelector("#formInProgress");

  taskInProgress.forEach((item) => {
    formInProgress.innerHTML += `<input
    type="text"
    readonly
    autocomplete="on"
    class="heading__task"
    placeholder = "${item.headingTask}"
  />
  <input
    type="text"
    readonly
    autocomplete="on"
    class="description__task"
    placeholder = "${item.descriptionTask}"
  />
  <div class= "btn">
  <button class="btn__clear"></button>
  <button id="btn__checked"></button>
  </div>`;
    console.log(taskInProgress);
    console.log(toDo);
    console.log(tasks);
    // console.log(toDo);
  });
};

const deleteTaskFromToDo = () => {
  formToDo.innerHTML = `<form id="formToDo">
  <h1>To do</h1>
  <input
    type="text"
    placeholder="Введите заголовок для этой задачи"
    autocomplete="on"
    id="heading__task"
  />
  <input
    type="text"
    placeholder="Введите задачу"
    autocomplete="on"
    id="description__task"
  />
  <button id="submitBtn">Добавить задачу</button>`;
};
