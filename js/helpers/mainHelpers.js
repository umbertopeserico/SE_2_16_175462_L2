/*
 * This function sets the visibility of the insert form to block
 + and cleans the form fields
 */
function showInsertForm() {
    var form = document.getElementById("insertNewItemForm");
    var nameInput = document.getElementById("itemNameInput");
    nameInput.value = "";
    var quantityInput = document.getElementById("itemQuantityInput");
    quantityInput.value = "";
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
    getAllItems().forEach(function(elem, index, array) {
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