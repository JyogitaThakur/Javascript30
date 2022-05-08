const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const checkAll = document.querySelector("#check-all");
const unCheckAll = document.querySelector("#uncheck-all");
const deleteAll = document.querySelector("#delete-all");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

// function populate takes array and list arguments
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
        <li id="item${i}">
          <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      } />
          <label for="item${i}">${plate.text}</label>
          <button class='btn' onclick=deleteBtn(${i}) id="item${i}">X</button>
        </li>
      `;
    })
    .join("");
}

function toggleDone(e) {
  // console.log(e.target)
  if (!e.target.matches("input")) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}
function checkedAll() {
  console.log("checkedAll");
  items.map((item) => {
    item.done = true;
    console.log(item);
  });
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function unCheckedAll() {
  console.log("uncheckedAll");
  items.map((item) => {
    item.done = false;
    console.log(item);
  });
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function deletedAll() {
  localStorage.clear();
  console.log("deleted");
  populateList(items, itemsList);
}

function deleteBtn(index) {
  console.log(index);
  let lists = localStorage.getItem("items");
  let list = JSON.parse(lists);
  list.splice(index, 1);
//   console.log(list.splice(index ,1))
  localStorage.setItem("items", JSON.stringify(list));
  populateList(list, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
checkAll.addEventListener("click", checkedAll);
unCheckAll.addEventListener("click", unCheckedAll);
deleteAll.addEventListener("click", deletedAll);

populateList(items, itemsList);
