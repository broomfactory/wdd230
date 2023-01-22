// Matthew Scoville

let myToDoList = {}

// Gets some DOM references

btnAdd = document.querySelector("#btnAdd");
toDoList = document.querySelector("#toDoItems");
const inputItem = document.querySelector("#item");

//Render to do list
// hook up button to mark an item done
// When a change occurs, save Lists to localstorage
// add a text Input to add another item

//stretch - due date and color to indicate status
// move done items to another list
// button to delete?

// Connect to document load event to pull initial list
function setup() {
    //load To Do List from localStorage--or start with an empty list
    myToDoList = loadToDo();
    renderList(myToDoList);
    inputItem.focus();
}

// Imports to do list from localStorage, or creates a default
// list if the key is not found in localStorage
function loadToDo() {
    let toDoList
    //localStorage.removeItem("myToDoList");
    if (localStorage.myToDoList)
        toDoList = JSON.parse(localStorage.myToDoList);
    else  
        toDoList = {
            listName: "To Do List",
            toDos: [
            ],
        };
    return toDoList;
}

// Add to do items to list element
function renderList(list) {
  document.querySelector("#listName").textContent =
    list.listName;

  list.toDos
    .forEach(item => addItem(toDoList,item));
}


// Save list to localStorage
function saveToDo(toDoList) {
    // I had to look up how to convert the toDoList
    // object to a json string
    localStorage.myToDoList = JSON.stringify(toDoList);
}

// Creates to do item with done button
function addItem(parentElement, description) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.className = "itemPadding";
  li.appendChild(button);
  li.appendChild(span);
  span.textContent = description;
  span.className = "itemPadding";
  button.textContent = "done";
  inputItem.value = "";
  inputItem.focus();

  //We need the specific onclick for this button item
  // to call remove item with a literal of the item text
  // so the removeItem() function will work
  button.onclick = function() {
      removeItem(`${description}`);      
      button.parentNode.remove();
  }

  parentElement.appendChild(li);
  return description;
}

// Used by the button event listener to append
// a new item to the <ul> and to myToDoList
function onAddClick() {    
    const textValue = inputItem.value;
    const index = myToDoList.toDos
      .findIndex(desc => desc === textValue);
    if (index == -1) {
        myToDoList.toDos
            .push(addItem(toDoItems,textValue));
        //save Changes
        saveToDo(myToDoList);
    };

}

// Removes an item from the toDos Array
function removeItem(textValue) {
    const index = myToDoList.toDos
        .findIndex( desc => desc === textValue);
    if (index >= 0)
        myToDoList.toDos.splice(index,1);
    
    //save Changes
    saveToDo(myToDoList);
}


btnAdd.addEventListener("click", onAddClick);
setup();
