//iNITIALIZING VARIABLES
var addTaskButton = document.getElementById("add_task_button");

var addTaskInput = document.getElementById("add_task_input");

var toDoList = document.getElementById("to_do_list");

var bg_colour_btn = document.querySelector(".bg_colour_btn");

var text_colour_btn = document.querySelector(".text_colour_btn");

var note = document.querySelector(".container");
//console.log(note);


//FUNCTION DECLARATIONS

//FUNCTION TO CHECK IF INPUT IS VALID
function inputIsValid(){
    if(addTaskInput.value.length > 0){
        return true;
    }
    return false;
}


//DISPLAYS AN ALERT IF THE INPUT IS INVALID
function displayError(){
    alert("Please enter an item.");
}

//ADDS A TASK
function addTask(){
    var li= document.createElement("li");
    li.appendChild(document.createTextNode(addTaskInput.value));
    toDoList.appendChild(li);
    addTaskInput.value = "";
    
}

//ADDS A TASK WHEN THE ADD TASK BUTTON IS CLICKED
function addTaskOnClick(){
    if(inputIsValid()){
        addTask();
    }else{
        displayError();
    }
}

//ADDS A TASK WHEN THE ENTER KEY IS PRESSED
function addTaskOnEnterKeyPressed(event){
    if(inputIsValid()){
        if(event.which === 13){
            addTask();
        }
    }
    
    
}

function changeBgColour(){
    note.style.background = bg_colour_btn.value;
}

function changeTextColour(){
    note.style.color = text_colour_btn.value;

}


//EVENTS

addTaskButton.addEventListener("click", addTaskOnClick);

addTaskInput.addEventListener("keypress", addTaskOnEnterKeyPressed);

bg_colour_btn.addEventListener("input", changeBgColour);

text_colour_btn.addEventListener("input", changeTextColour);
