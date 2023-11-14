document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
});

function loadTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    // Example tasks
    const tasks = [
        { text: "Sample Task 1", completed: false },
        { text: "Sample Task 2", completed: true },
        // Add more tasks as needed
        // Deberán cargar las tareas que tenga el usuario en DynamoDB
    ];

    tasks.forEach(function(task, index) {
        addTaskToList(task, index);
    });
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const task = { text: taskText, completed: false };
        addTaskToList(task);
        saveTask(task);
        taskInput.value = "";
    }
}

function addTaskToList(task, index) {
    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");
    li.innerHTML = `
        <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
        <button onclick="toggleTask(this)">Toggle</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
}

function toggleTask(button) {
    const taskList = document.getElementById("taskList");
    const li = button.parentElement;
    const span = li.querySelector('span');

    // Toggle the completed status
    span.classList.toggle('completed');

    // Implement code to update the task's completion status in storage (e.g., localStorage) here
    // Modificar el código para que invoque a la RESTful API para cambiar el estado de la tarea
}

function deleteTask(button) {
    const taskList = document.getElementById("taskList");
    const li = button.parentElement;
    taskList.removeChild(li);
    // Implement code to delete the task from storage (e.g., localStorage) here
    // Modificar el código para que invoque a la RESTful API para borrar la tarea
}

function saveTask(task) {
    // Save the task to localStorage or any other storage mechanism
    // You can use JSON.stringify() to convert the task object to a string
    // Modificar el código para que invoque a la RESTful API para guardar la tarea
}

// You can customize and extend this code based on your specific requirements.
