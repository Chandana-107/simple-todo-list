// Select DOM elements
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new task item
  const listItem = document.createElement("li");
  listItem.textContent = taskText;

  // Add complete button
  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.addEventListener("click", () => {
    listItem.classList.toggle("completed");
  });

  // Add delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(listItem);
  });

  // Add buttons to the list item
  listItem.appendChild(completeButton);
  listItem.appendChild(deleteButton);

  // Add the task to the list
  taskList.appendChild(listItem);

  // Clear the input field
  taskInput.value = "";
}

// Add task when button is clicked
addTaskButton.addEventListener("click", addTask);

// Add task when Enter key is pressed
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
