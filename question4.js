let tasks = [];

function addTasks(id,name,description){
    tasks.push(id,name,description);
}

function viewTasks(){
    return tasks;
}

function updateTasks(id,newName,newDescription){
    const task = tasks.find( task => task.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
    }
}

function deleteTasks(id){
    tasks = tasks.filter(task => task.id !== id);
}
addTasks(1, 'a', 'yay')
addTasks(2, 'b', 'yoy')
deleteTasks(1)
console.log(viewTasks());