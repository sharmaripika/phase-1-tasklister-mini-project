document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get the value of the task description input
        const taskDescriptionInput = document.getElementById('new-task-description');
        const taskDescription = taskDescriptionInput.value;

        // Create a new list item element
        const listItem = document.createElement('li');
        listItem.textContent = taskDescription;
        let btn = document.createElement("button");
        btn.addEventListener("click", function handleDelete(e){
          e.target.parentNode.remove()})
          btn.textContent ="x"
          listItem.appendChild(btn);
        // Append the new task to the task list
        const taskList = document.getElementById('tasks');
        taskList.appendChild(listItem);

        // Clear the task description input field
        taskDescriptionInput.value = '';
    });
});
