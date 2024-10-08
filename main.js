//switch modes
function switchMode() {
  const html = document.documentElement;
  html.classList.toggle("dark");
}

//functions
function removeItem(event) {
  event.target.closest(".todo-list__item").remove();
}

function checkItem(event) {
  event.target
    .closest(".todo-list__item")
    .classList.toggle("todo-list__item--checked");
}

function activeFilter(event) {
  const listItems = document.querySelectorAll(".todo-list__item");
  listItems.forEach(function (itemChecked) {
    if (itemChecked.classList.contains("todo-list__item--checked")) {
      itemChecked.style.display = "none";
    } else {
      itemChecked.style.display = "flex";
    }
  });

  const searchActive = document.querySelector(".filter__status--active");
  searchActive.classList.remove("filter__status--active");
  event.target.classList.add("filter__status--active");
}

function completedFilter(event) {
  const listItems = document.querySelectorAll(".todo-list__item");
  listItems.forEach(function (itemActive) {
    if (!itemActive.classList.contains("todo-list__item--checked")) {
      itemActive.style.display = "none";
    } else {
      itemActive.style.display = "flex";
    }
  });

  const searchActive = document.querySelector(".filter__status--active");
  searchActive.classList.remove("filter__status--active");
  event.target.classList.add("filter__status--active");
}

function allFilter(event) {
  const listItems = document.querySelectorAll(".todo-list__item");
  listItems.forEach(function (item) {
    item.style.display = "flex";
  });

  const searchActive = document.querySelector(".filter__status--active");
  searchActive.classList.remove("filter__status--active");
  event.target.classList.add("filter__status--active");
}

//add new todo
const input = document.getElementById("new-todo");
const list = document.getElementById("list");
function getTemplate(inputValue) {
  return `<label class="checkbox">
              <input
                type="checkbox"
                class="checkbox__input"
                value=${inputValue}
              /><span></span>
            </label>
            <p>${inputValue}</p>
            <span class="todo-list__item__delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.6777 0.707107L16.9706 0L8.83883 8.13173L0.707107 0L0 0.707107L8.13173 8.83883L0 16.9706L0.707106 17.6777L8.83883 9.54594L16.9706 17.6777L17.6777 16.9706L9.54594 8.83883L17.6777 0.707107Z"
                  fill="#494C6B"
                />
              </svg>
            </span>`;
}
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const inputValue = input.value;

    if (inputValue.trim() !== "") {
      const listItem = document.createElement("div");
      listItem.classList.add("todo-list__item");
      listItem.innerHTML = getTemplate(inputValue);
      listItem
        .querySelector(".todo-list__item__delete")
        .addEventListener("click", removeItem);
      listItem
        .querySelector(".checkbox__input")
        .addEventListener("click", checkItem);
      list.prepend(listItem);

      input.value = "";
    }
  }
});

//remove todo
const deleteElements = document.querySelectorAll(".todo-list__item__delete");
deleteElements.forEach(function (deleteElem) {
  deleteElem.addEventListener("click", removeItem);
});

//checking items
const checkboxItems = document.querySelectorAll(".checkbox__input");
checkboxItems.forEach(function (checkboxItem) {
  checkboxItem.addEventListener("change", checkItem);
});

//active filter
const activeBtns = document.querySelectorAll(".filter__status__active");
activeBtns.forEach(function (activeBtn) {
  activeBtn.addEventListener("click", activeFilter);
});

//completed filter
const completedBtns = document.querySelectorAll(".filter__status__completed");
completedBtns.forEach(function (completedBtn) {
  completedBtn.addEventListener("click", completedFilter);
});

//all filter
const allBtns = document.querySelectorAll(".filter__status--active");
allBtns.forEach(function (allBtn) {
  allBtn.addEventListener("click", allFilter);
});

//clear completed
const clear = document.querySelector(".filter__completed");
clear.addEventListener("click", function () {
  const inputCheckboxs = document.querySelectorAll("[type='checkbox']");
  inputCheckboxs.forEach(function (inputCheckbox) {
    inputCheckbox.checked = false;
  });
  const checkeds = document.querySelectorAll(".todo-list__item--checked");
  checkeds.forEach(function (checked) {
    checked.classList.remove("todo-list__item--checked");
  });
});
