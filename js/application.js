/*
 * This function sets the visibility of the insert form
 */
function showInsertForm() {
    var form = document.getElementById("insertNewItemForm");
    hideInsertButton();
    form.style.display = "block";
}

/*
 * This function hides the button used to show the insert form
 */
function hideInsertButton() {
    var showFormButton = document.getElementById("showNewItemForm");
    showFormButton.style.display = "none";
}