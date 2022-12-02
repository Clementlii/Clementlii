//Curseur custom
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top:" + (e.pageY - 40) + "px; left:" + (e.pageX - 45) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

//Creation de ma modal
const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleModal)
);

function toggleModal() {
  modalContainer.classList.toggle("active");
}

//Creation de ma modaldeux
const modalContainerdeux = document.querySelector(".modal-containerdeux");
const modalTriggersdeux = document.querySelectorAll(".modal-triggerdeux ");

modalTriggersdeux.forEach((trigger) =>
  trigger.addEventListener("click", toggleModaldeux)
);

function toggleModaldeux() {
  modalContainerdeux.classList.toggle("active");
}

//Creation modal mesure
const modalContainermesure = document.querySelector(".modal-containermesure");
const modalTriggersmesure = document.querySelectorAll(".modal-triggermesure ");

modalTriggersmesure.forEach((trigger) =>
  trigger.addEventListener("click", toggleModalmesure)
);

function toggleModalmesure() {
  modalContainermesure.classList.toggle("active");
}

//switch

const btnToggle = document.querySelector("#switch");

btnToggle.addEventListener("click", () => {
  const body = document.body;

  if (body.classList.contains("dark")) {
    body.classList.add("light");
    body.classList.remove("dark");
  } else if (body.classList.contains("light")) {
    body.classList.add("dark");
    body.classList.remove("light");
  }
});
