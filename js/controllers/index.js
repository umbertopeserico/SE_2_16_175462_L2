/*
 * This function is exectuted when the page is loaded
 */
function onLoadAction() {
    // Sets the limit in the view
    var limitSizeInput = document.getElementById("limitSizeInput");
    limitSizeInput.value = getLimit();
    
    // This adds an element when the program starts
    var firstItem = new item("T-Shirt", 1);
    addNewItem(firstItem);
    
    // Draws the table when the page is loaded
    drawTable();
}


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
        if(!addNewItem(newItem)) {
            var errors = "";
            getItemErrors(newItem).forEach(function(elem, index, array){
               errors += elem +="\n"; 
            });
            alert(errors);
        }
    } else {
        if(!increaseQuantity(newItem, quantityInput.value)) {
            var errors = "";
            getItemErrors(newItem).forEach(function(elem, index, array){
               errors += elem +="\n"; 
            });
            alert(errors);
        }
    }
    
    drawTable();
    
    hideInsertForm();
    showInsertButton();
}