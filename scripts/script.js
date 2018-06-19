var addTaskButton = document.getElementById("add_task_button");

var addTaskInput = document.getElementById("add_task_input");

var toDoList = document.getElementById("to_do_list");

function inputIsValid(){
    if(addTaskInput.value.length > 0){
        return true;
    }
    return false;
}

function addTask(){
    var li= document.createElement("li");
    li.appendChild(document.createTextNode(addTaskInput.value));
    toDoList.appendChild(li);
    
}

function addTaskOnClick(){
    if(inputIsValid()){
        addTask();
    }
}

function addTaskOnEnterKeyPressed(){
    
}

addTaskButton.addEventListener("click", addTaskOnClick);

addTaskInput.addEventListener("keypress", addTaskOnEnterKeyPressed);