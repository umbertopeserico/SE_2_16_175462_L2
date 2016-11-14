// this is the list containing items
var items = [];

/*
 * This function gets all items added to list
 */
function getAllItems() {
    return items;
}

/* 
 * This function adds an new item to the list
 */
function addNewItem(item) {
    console.log("ADD NEW ITEM TO LIST: "+item.name+" + "+item.quantity);
    if(validateItem(item)) {
        getAllItems().push(item);
        return true;
    } else {
        return false;
    }
    
}

/*
 * This function allows to increment the quantity of an object
 */
function increaseQuantity(item, quantity) {
    console.log("INCREASE QUANTITY: "+item.quantity+" + "+quantity);
    var oldQuantity = item.quantity;
    item.quantity+=parseInt(quantity);
    if(validateItem(item)) {
        return true;
    } else {
        item.quantity = oldQuantity;
        return false;
    }
    
}

/*
 * This function searches if in the list an item is already present.
 */
function findItemByName(name) {
    var foundElem = null;
    getAllItems().forEach(function (elem, index, array) {
        if(elem.name.toUpperCase() == name.toUpperCase()) {
            foundElem = elem;
            console.log("ITEM ALREADY PRESENT: " +elem.name.toUpperCase()+" "+name.toUpperCase());
            return foundElem;
        }
    });
    return foundElem;
}

/*
 * This function checks if an item is valid.
 * If not, adds errors to item
 */
function validateItem(item) {
    console.log("VALIDATING: ");
    console.log("VALIDATING name: "+item.name);
    item.errors = [];
    if(item.name == "") {
        item.errors.push("Item name can not be blank");
    }
    console.log("VALIDATING quantity: "+item.quantity);
    if(isNaN(item.quantity)) {
        item.errors.push("Item quantity must be a number");
    }
    item.quantity = parseInt(item.quantity);
    if(item.quantity <= 0) {
        item.errors.push("Item quantity can not be negative");
    }
    
    if(item.errors.length == 0) {
        return true;
    } else {
        return false;
    }
}

/*
 * This function get the errors associated to an item after the call of validateItem(item)
 */
function getItemErrors(item) {
    return item.errors;
}