let data = [];

const balanceAmount = document.getElementById('balance');
const incomeAmount = document.getElementById('income');
const expenseAmount = document.getElementById('expense');

const amountDescription = document.getElementById('text');
const enterAmount = document.getElementById('amount');

const submitform = document.getElementById('transaction-form');

const displayList = document.getElementById('transaction-list');



// add transactions 
function validateData(){
    const description = amountDescription.value.trim() ;
    const amount = enterAmount.value.trim();
    if(description === "" || amount === ""){
        alert("Please Enter valid input");
        return false ;
    }
    return true;

}

function addTransaction(description , amount){
    const newTransaction = {
        id: data.length + 1,
        description : description,
        amount : +amount

    }
    
    
    data.push(newTransaction);
    
    // console.log("New Transaction :" , newTransaction);
    console.log("Data :" , data);
};

submitform.addEventListener('submit' , (e)=> {
    e.preventDefault();
    if(!validateData()) return ;
    addTransaction(amountDescription.value , enterAmount.value);

    
    updateUI();

    amountDescription.value = "";
    enterAmount.value = "";
    // updateUI();
}) ;


// get income function 
function getIncome (){
    return data
    .filter(t => t.amount > 0)
    .reduce( (acc, t) => acc + t.amount , 0);
}

// get expense function 
function getExpense(){
    return data
    .filter(t => t.amount < 0)
    .reduce( (acc, t) => acc + t.amount , 0);
}

// get total balance 
function getBalance(income , expense){
    return income + expense ;
}

// function to display items 

function displayData(description , amount , id){
    const list = document.createElement('li');
    list.textContent = `${description}  ||  ${amount} `;
    if(amount > 0){
        list.style.background = "green";
    } else {
        list.style.background = "red";
    }

    const dlt = document.createElement('button');
    dlt.textContent = "X";
    dlt.dataset.id = id;

    dlt.addEventListener('click' , (e)=>{
        data = data.filter(t => t.id !== parseInt(dlt.dataset.id));
         list.remove();

         updateUI();
    });

    list.appendChild(dlt);
    displayList.appendChild(list);

}

// Updating in dom ----  expense , income and balance 
function updateUI(){
    const income = getIncome();
    const expense = getExpense();
    const balance = getBalance(income , expense);

    incomeAmount.textContent = income;
    expenseAmount.textContent = expense;
    balanceAmount.textContent = balance;

    displayList.innerHTML= "";
    data.forEach(t => displayData(t.description , t.amount, t.id));  
    
   
}

