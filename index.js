const submitBtn = document.querySelector("#submitBtn");

let tasks = {
  toDo: [],
  taskInProgress: [],
  taskDone: [],
  taskDeleted: [],
};

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const headingTask = document.querySelector("#heading__task");
  const descriptionTask = document.querySelector("#description__task");

  tasks.toDo.push({
    headingTask: headingTask.value,
    descriptionTask: descriptionTask.value,
  });

  // console.log(tasks);
  // console.log(toDo);
  addTasks();
  // checked();
});

const addTasks = () => {
  const formToDo = document.querySelector("#formToDo");

  formToDo.innerHTML = "";

  tasks.toDo.forEach((item) => {
    formToDo.innerHTML += `
    <div>
    <div class="heading__task"> ${item.headingTask}</div>
    <div class="description__task"> ${item.descriptionTask}</div>
    
    <div class= "btn">
    <button class="btn__pancil"></button>
    <button class="btn__clear"></button>
    <button id="btn__checked"></button>
    </div>
    </div>
  `;
  });
};

const checked = () => {
  const inProgressChecked = document.querySelector("#btn__checked");

  inProgressChecked.addEventListener("click", (event) => {
    event.preventDefault();

    taskInProgress = tasks.toDo.splice(0, 1);
    // tasks.taskInProgress = taskInProgress;

    addTaskInProgress();
    deleteTaskFromToDo();
  });
};

const addTaskInProgress = () => {
  const formInProgress = document.querySelector("#formInProgress");

  tasks.taskInProgress.forEach((item) => {
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
