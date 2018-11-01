var addItem = document.getElementById("enter");
var input = document.getElementById("userInput");
var list = document.getElementById("todoList");

function inputLength() {
    return input.value.length;
}

function listLength() {
    return document.querySelectorAll("li").length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    list.appendChild(li);
    input.value = "";

    var deleteB = document.createElement("button");
    deleteB.appendChild(document.createTextNode("X"));
    deleteB.classList.add("deleteButton");
    li.appendChild(deleteB);

    var checkB = document.createElement("button");
    checkB.appendChild(document.createTextNode("\u2714"));
    checkB.classList.add("checkButton");
    li.appendChild(checkB);
}

function addToListClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addDeleteToExisting() {
    var li = document.getElementsByTagName("li");
    for (var i = 0; i < li.length; i++) {
        var deleteB = document.createElement("button");
        deleteB.appendChild(document.createTextNode("X"));
        deleteB.classList.add("deleteButton");
        li[i].appendChild(deleteB);
    }
}

addDeleteToExisting()

function addcheckToExisting() {
    var li = document.getElementsByTagName("li");
    for (var i = 0; i < li.length; i++) {
        var checkB = document.createElement("button");
        checkB.appendChild(document.createTextNode("\u2714"));
        checkB.classList.add("checkButton");
        li[i].appendChild(checkB);
    }
}

addcheckToExisting()

function addToListKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function removeCheck(event) {
    if (event.target.className === "checkButton") {
        event.target.classList.add("checked");
    } else if (event.target.className === "deleteButton") {
        event.target.parentNode.remove();
    } else {
        event.target.classList.remove("checked");
    }
}

list.addEventListener("click", removeCheck)

addItem.addEventListener("click", addToListClick)

input.addEventListener("keypress", addToListKeypress)