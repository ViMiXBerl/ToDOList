const submitBtn = document.querySelector("#submitBtn");
const form = document.querySelector(".form");
const formToDo = document.querySelector("#formToDo");
const formInProgress = document.querySelector("#formInProgress");
const formDeleted = document.querySelector("#formDeleted");
const formDone = document.querySelector("#formDone");
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
  tasks.taskInProgress.forEach((item) => {
    formInProgress.innerHTML += `
      <div class="card" >
      <p class="card__headingTask">${item.headingTask}</p>
      <p class="card__descriptionTask">${item.descriptionTask}</p>

      <button id="btn__clear_deleted"></button>
      <button id="btn__checked_done"></button>
     


      </div>

    `;
  });
  formDeleted.innerHTML = "";
  tasks.taskDeleted.forEach((item) => {
    formDeleted.innerHTML += `
    <div class="card" >
    <p class="card__headingTask">${item.headingTask}</p>
    <p class="card__descriptionTask">${item.descriptionTask}</p>
    </div>

  `;
  });
  formDone.innerHTML = "";
  tasks.taskDone.forEach((item) => {
    formDone.innerHTML += `
    <div class="card" >
    <p class="card__headingTask">${item.headingTask}</p>
    <p class="card__descriptionTask">${item.descriptionTask}</p>
    </div>

  `;
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

  tasks.taskInProgress.push(tasks.toDo[index]);
  tasks.toDo.splice(index, 1);

  console.log(tasks.toDo);
  console.log(tasks.taskInProgress);
  console.log(tasks.taskDone);
  console.log(tasks.taskDeleted);

  addTasks();
};
const done = (event) => {
  const card = event.target.closest(".card");
  const heading = card.querySelector(".card__headingTask").textContent;
  const description = card.querySelector(".card__descriptionTask").textContent;

  const index = tasks.taskInProgress.findIndex(
    (item) =>
      item.headingTask === heading && item.descriptionTask === description
  );
  console.log(index);

  tasks.taskDone.push(tasks.taskInProgress[index]);
  tasks.taskInProgress.splice(index, 1);

  addTasks();
  console.log(tasks.taskDone);
};

const clear = (event) => {
  const card = event.target.closest(".card");
  const heading = card.querySelector(".card__headingTask").textContent;
  const description = card.querySelector(".card__descriptionTask").textContent;

  const index = tasks.toDo.findIndex(
    (item) =>
      item.headingTask === heading && item.descriptionTask === description
  );

  tasks.taskDeleted.push(tasks.toDo[index]);
  tasks.toDo.splice(index, 1);

  addTasks();
};
const deleted = (event) => {
  const card = event.target.closest(".card");
  const heading = card.querySelector(".card__headingTask").textContent;
  const description = card.querySelector(".card__descriptionTask").textContent;

  const index = tasks.taskInProgress.findIndex(
    (item) =>
      item.headingTask === heading && item.descriptionTask === description
  );
  console.log(index);

  tasks.taskDeleted.push(tasks.taskInProgress[index]);
  tasks.taskInProgress.splice(index, 1);

  addTasks();
  console.log(tasks.taskDone);
};
formToDo.addEventListener("click", (event) => {
  if (event.target.closest("#btn__checked")) checked(event);
  if (event.target.closest("#btn__clear")) clear(event);
  if (event.target.closest("#btn__checked_done")) done(event);

  // if (event.target.closest("#btn__pancil")) pancil(event);
});

formInProgress.addEventListener("click", (event) => {
  if (event.target.closest("#btn__checked_done")) done(event);
  if (event.target.closest("#btn__clear_deleted")) deleted(event);

  // if (event.target.closest("#btn__pancil")) pancil(event);
});
