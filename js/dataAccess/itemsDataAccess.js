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
    getAllItems().push(item);
}

/*
 * This function allows to increment the quantity of an object
 */
function increaseQuantity(item, quantity) {
    console.log("INCREASE QUANTITY: "+item.quantity+" + "+quantity);
    item.quantity+=parseInt(quantity);
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