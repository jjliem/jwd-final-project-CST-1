function validFormFieldInput(data) {
//  Select form elements with querySelector
const newTaskNameInput = document.querySelector('#newTaskNameInput');
const newDescriptionInput = document.querySelector('#newDescriptionInput');
const newAssignedToInput = document.querySelector('#newAssignedToInput');
const newDueDateInput = document.querySelector('#newDueDateInput');
const submitButton = document.querySelector('#submitButton');

//  Get values from form and save into variables
const taskName = newTaskNameInput.value;
const description = newDescriptionInput.value;
const assignedTo = newAssignedToInput.value;
const dueDate = newDueDateInput.value;

//  Log values to verify data 
console.log("name:  "+ taskName);
console.log("description:  "+ description);
console.log("assignedTo:  "+ assignedTo);
console.log("dueDate:  "+ dueDate);
}