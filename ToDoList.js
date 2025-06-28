// Array to store tasks
let todoList = [];

// Add a task
function addTask() {
  const task = document.getElementById("taskInput").value;
  if (task.trim() !== "") {
    todoList.push({ task: task, completed: false });
    console.log(✅ Task added: "${task}");
    document.getElementById("taskInput").value = "";
  } else {
    console.log("⚠️ Please enter a valid task.");
  }
}

// List all tasks
function listTasks() {
  console.clear();
  if (todoList.length === 0) {
    console.log("📭 Your to-do list is empty.");
    return;
  }
  console.log("📋 Your To-Do List:");
  todoList.forEach((item, index) => {
    const status = item.completed ? "✓ Done" : "❌ Pending";
    console.log(${index + 1}. ${item.task} - ${status});
  });
}

// Mark a task as done
function markDone() {
  const index = parseInt(document.getElementById("taskNumber").value);
  if (todoList[index - 1]) {
    todoList[index - 1].completed = true;
    console.log(✔️ Marked task ${index} as done.);
  } else {
    console.log("⚠️ Invalid task number.");
  }
}

// Delete a task
function deleteTask() {
  const index = parseInt(document.getElementById("taskNumber").value);
  if (todoList[index - 1]) {
    console.log(🗑️ Deleted task: "${todoList[index - 1].task}");
    todoList.splice(index - 1, 1);
  } else {
    console.log("⚠️ Invalid task number.");
  }
}