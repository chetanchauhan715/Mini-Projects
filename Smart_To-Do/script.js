let tasks = [];
let currentFilter = "All";


const input = document.getElementById('task-input');

const enter = document.getElementById('task-form');

const buttons = document.querySelectorAll('.filters button');

const displaylist = document.getElementById('task-list');


buttons.forEach(btn => {
    btn.addEventListener('click' , () => {
        console.log('clicked' , btn.dataset.filter);
        updateUI();
    });
});

function validateTask(){
    const taskdata = input.value.trim() ;
    if(taskdata === ""){
        alert("Please Provide Valid Task Data");
        return false;
    }
    return true;
}

             
function addTask(input){
    const newTask = {
        id:tasks.length +1,
        input : input,
        status: "pendling"
    }

    tasks.push(newTask);
    console.log(newTask);
    console.log(tasks);
}

enter.addEventListener('submit' , (e) => {
    e.preventDefault();
    if(!validateTask()) return ;

    addTask(input.value);
    updateUI();

    input.value = "";
    

});

function displayData(task){
    const list = document.createElement('li');
    list.textContent = `Tasks : ${task.input}  [${task.status}]` ;
    displaylist.appendChild(list);
}

function updateUI(){
    displaylist.innerHTML = "";
    tasks.forEach(t => {
        if(currentFilter === "All" || t.status === currentFilter){
            displayData(t);
        }
    });

}