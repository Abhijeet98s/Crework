window.onload = () => {
  let form = document.getElementById("form-input");
  let input = document.getElementById("input");
  let btn = document.getElementById("btn");
  let listItem = document.getElementById("list");
  let clearBtn = document.getElementById("btnClr");
  let id = 1;
  let liItem = "";
  let todoList = [];

  btn.addEventListener("click", addTodoItem);

  listItem.addEventListener("click", boxChecked);

  clearBtn.addEventListener("click", clearList);

  if (localStorage.length <= 0) {
    clearBtn.style.display = "none";
  }

  if (localStorage.length > 0) {
    displayItem();
  }

  function addTodoItem() {
    if (input.value === "") {
      alert("You must enter some value!");
    } else {
      if (listItem.style.border === "") {
        btnClr.style.display = "inline";
      }
      let inputText = input.value;
      let item = `<li id="li-${id}">${inputText}<input id="box-${id}"class="checkboxes" type="checkbox"></li>`;
      listItem.insertAdjacentHTML("afterbegin", item);
      liItem = {
        item: inputText,
      };
      todoList.push(liItem);
      id++;
      addToLocalStorage();
      form.reset();
    }
  }

  function boxChecked(e) {
    const element = e.target;
    if (element.type === "checkbox") {
      element.parentNode.style.textDecoration = "line-through";
      todoList = JSON.parse(localStorage.getItem("todoList"));
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
  }

  function addToLocalStorage() {
    if (typeof Storage !== "undefined") {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    } else {
      return;
    }
  }

  function displayItem() {
    todoList = JSON.parse(localStorage.getItem("todoList"));
    todoList.forEach(function (element) {
      let inputText = element.item;
      let item = `<li id="li-${id}">${inputText}<input id="box-${id}" class="checkboxes" type="checkbox"></li>`;
      listItem.insertAdjacentHTML("afterbegin", item);
      if (element.checked) {
        let li = document.getElementById("li-" + id);
        li.style.textDecoration = "line-through";
      }
      id++;
    });
  }

  function clearList() {
    todoList = [];
    localStorage.clear();
    listItem.innerHTML = "";
    clearBtn.style.display = "none";
    listItem.style.borderTop = "";
  }
};
