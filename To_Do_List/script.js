const input = document.getElementById('input');
const button = document.getElementById('button');
const list = document.getElementById('list-items');

button.addEventListener('click' , function(){
    const task = input.value;

    if(task === ""){
        alert("please enter a valid task");
        return;
    }

    if(list.children.length>=10){
        alert("You have Entered max Tasks ! cannot add more ");
        return ;
    }

    const li = document.createElement('li');
    li.textContent = task;

    if(task.length > 50){
        alert("please enter short and sweet task ");
        return ;
    }
    list.appendChild(li);

    input.value = "";
})