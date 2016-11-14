// this is the list containing items
var items = [];
var limit = 30;

/*
 * This function gets the actual limit of storage
 */
function getLimit() {
    return limit;
}

/*
 * This function sets the actual limit of storage
 */
function setLimit(size) {
    if(validateLimit(size)) {
        limit = size;
        return true;
    } else {
        return false;
    }
}

/*
 * This function gets the actual limit of storage
 */
function validateLimit(size) {
    if(isNaN(size)) {
        return false;
    } else {
        if(parseInt(size) <= 0) {
            return false;
        } else {
            return true;
        }
    }
}

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
        console.log();
        if(!validateQuantity(item)) {
            getAllItems().pop(item);
            return false;
        }
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
        if(!validateQuantity(item)) {
            return false;
        }
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
    //console.log(getActualQuantity());
    console.log(getActualQuantity()+" "+item.quantity)
    console.log(getActualQuantity()+item.quantity)
    
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

/*
 * This function gets the actual quantity in storage
 */
function getActualQuantity() {
    var counter = 0;
    getAllItems().forEach(function (elem, index, array) {
        counter += elem.quantity;
    });
    return parseInt(counter);
}

function validateQuantity(item) {
    console.log("VALIDATING QUANTITY:");
    console.log(getActualQuantity()+ " "+ limit)
    if(getActualQuantity() > limit) {
        console.log("VALIDATING QUANTITY: FALSE");
        item.errors.push("Quantity is too big. Limit of " + limit + " reached");
        return false;
    } else {
        console.log("VALIDATING QUANTITY: TRUE");
        return true;
    }
}