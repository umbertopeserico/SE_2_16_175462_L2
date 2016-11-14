// BEGIN model structure

// This is the representation of an item
var item = function(name, quantity) {
    this.name = name;
    this.quantity = quantity;
}

// this is the list containing items
var items = [];

// END model structure


// BEGIN data access functions: theese functions allow to edit the data structure

function addNewItem(item) {
    items.push(item);
}

function increaseQuantity(item, quantity) {
    console.log("INCREASE QUANTITY: "+item.quantity+" + "+quantity);
    item.quantity+=parseInt(quantity);
}

function findItemByName(name) {
    var foundElem = null;
    items.forEach(function (elem, index, array) {
        if(elem.name.toUpperCase() == name.toUpperCase()) {
            foundElem = elem;
            console.log("ALREADY PRESENT: " +elem.name.toUpperCase()+" "+name.toUpperCase());
            return foundElem;
        }
    });
    return foundElem;
}

// END data access functions


// BEGIN helper functions: theese functions are view helpers to edit html/css properties

/*
 * This function sets the visibility of the insert form to block
 */
function showInsertForm() {
    var form = document.getElementById("insertNewItemForm");
    form.style.display = "block";
}

/*
 * This function sets the visibility of the insert form to none
 */
function hideInsertForm() {
    var form = document.getElementById("insertNewItemForm");
    form.style.display = "none";
}

/*
 * This function hides the button used to show the insert form
 */
function hideInsertButton() {
    var showFormButton = document.getElementById("showNewItemForm");
    showFormButton.style.display = "none";
}

/*
 * This function shows the button used to show the insert form
 */
function showInsertButton() {
    var showFormButton = document.getElementById("showNewItemForm");
    showFormButton.style.display = "block";
}

/*
 * This function redraws the table with the new data from the model
 */
function drawTable() {
    console.log("DRAWING TABLE...");
    var tbody = document.getElementById("itemsTableTbody");
    tbody.innerHTML = "";
    items.forEach(function(elem, index, array) {
        var row = document.createElement("tr");
        var nameCell = document.createElement("td");
        var quantityCell = document.createElement("td");
        row.appendChild(nameCell);
        row.appendChild(quantityCell);
        nameCell.innerHTML = elem.name;
        quantityCell.innerHTML = elem.quantity;
        tbody.appendChild(row);
    })
}

// END helper functions


// BEGIN controller functions

/*
 * This is the action of the button that shows the insert form
 */
function showInsertFormAction() {
    hideInsertButton();
    showInsertForm();
}

/*
 * This is the action of the button that inserts an element into the table
 */
function insertNewItemAction() {
    var nameInput = document.getElementById("itemNameInput");
    var quantityInput = document.getElementById("itemQuantityInput");
    console.log("name Input: "+nameInput.value);
    var newItem = findItemByName(nameInput.value);
    console.log("NEW ITEM: "+newItem);
    if(newItem === null) {
        newItem = new item(nameInput.value, parseInt(quantityInput.value));
        addNewItem(newItem);
    } else {
        increaseQuantity(newItem, quantityInput.value);
    }
    
    drawTable();
    
    hideInsertForm();
    showInsertButton();
}

// END controller functions