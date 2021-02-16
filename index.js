const submitBtn = document.querySelector("#submitBtn");
const form = document.querySelector(".form");
const formToDo = document.querySelector("#formToDo");
const formInProgress = document.querySelector("#formInProgress");

const headingTask = document.querySelector("#heading__task");
const descriptionTask = document.querySelector("#description__task");

let tasks = {
  toDo: [],
  taskInProgress: [],
  taskDone: [],
  taskDeleted: [],
};

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  tasks.toDo.push({
    headingTask: headingTask.value,
    descriptionTask: descriptionTask.value,
  });

  // console.log(tasks);
  // console.log(tasks.toDo);
  // console.log(tasks.taskInProgress);

  form.reset();
  addTasks();
});

const addTasks = () => {
  formToDo.innerHTML = "";

  tasks.toDo.forEach((item) => {
    formToDo.innerHTML += `
    <div class="card" >
    <p class="card__headingTask">${item.headingTask}</p>
    <p class="card__descriptionTask">${item.descriptionTask}</p>
    
    <button id="btn__pancil"></button>
    <button id="btn__clear"></button>
    <button id="btn__checked"></button>
   
    </div>
    
  `;
  });
  formInProgress.innerHTML = "";
  tasks.taskInProgress.forEach((item, index) => {
    formInProgress.innerHTML += `
      <div class="card" >
      <p class="card__headingTask">${item[index].headingTask}</p>
      <p class="card__descriptionTask">${item[index].descriptionTask}</p>

      <button id="btn__clear"></button>
      <button id="btn__checked"></button>

      </div>

    `;
    console.log(item[index]);
  });
};

const checked = (event) => {
  const card = event.target.closest(".card");
  const heading = card.querySelector(".card__headingTask").textContent;
  const description = card.querySelector(".card__descriptionTask").textContent;

  const index = tasks.toDo.findIndex(
    (item) =>
      item.headingTask === heading && item.descriptionTask === description
  );

  tasks.taskInProgress.push(tasks.toDo.splice(index, 1));

  addTasks();
};

const clear = (event) => {
  const card = event.target.closest(".card");
  const heading = card.querySelector(".card__headingTask").textContent;
  const description = card.querySelector(".card__descriptionTask").textContent;

  const index = tasks.toDo.findIndex(
    (item) =>
      item.headingTask === heading && item.descriptionTask === description
  );

  tasks.taskDeleted.push(tasks.toDo.splice(index, 1));

  addTasks();
};
formToDo.addEventListener("click", (event) => {
  if (event.target.closest("#btn__checked")) checked(event);

  if (event.target.closest("#btn__clear")) clear(event);
  // if (event.target.closest("#btn__pancil")) pancil(event);
});
