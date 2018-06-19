var addTaskButton = document.getElementById("add_task_button");

var addTaskInput = document.getElementById("add_task_input");

var toDoList = document.getElementById("to_do_list");


function inputIsValid(){
    if(addTaskInput.value.length > 0){
        return true;
    }
    return false;
}

function displayError(){
    alert("Please enter an item.");
}

function addTask(){
    var li= document.createElement("li");
    li.appendChild(document.createTextNode(addTaskInput.value));
    toDoList.appendChild(li);
    addTaskInput.value = "";
    
}

function addTaskOnClick(){
    if(inputIsValid()){
        addTask();
    }else{
        displayError();
    }
}

function addTaskOnEnterKeyPressed(event){
    if(inputIsValid()){
        if(event.which === 13){
            addTask();
        }
    }
    
    
}



addTaskButton.addEventListener("click", addTaskOnClick);

addTaskInput.addEventListener("keypress", addTaskOnEnterKeyPressed);
