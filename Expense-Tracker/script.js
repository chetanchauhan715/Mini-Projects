let data = [];

const balanceAmount = document.getElementById('balance');
const incomeAmount = document.getElementById('income');
const expenseAmount = document.getElementById('expense');

const amountDescription = document.getElementById('text');
const enterAmount = document.getElementById('amount');

const submitform = document.getElementById('transaction-form');

const displayList = document.getElementById('transaction-list');



// add transactions 
function addTransaction(description , amount){
    const newTransaction = {
        id: data.length + 1,
        description : description,
        amount : +amount

    }

    data.push(newTransaction);
    console.log("New Transaction :" , newTransaction);
    // console.log("Data :" , data);
};

submitform.addEventListener('submit' , (e)=> {
    e.preventDefault();
    addTransaction(amountDescription.value , enterAmount.value);

    updateUI();
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
    list.textContent = `${amountDescription.value} ${enterAmount.value} `;

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
    const balance = getBalance();

    incomeAmount.textContent = income;
    expenseAmount.textContent = expense;
    balanceAmount.textContent = getBalance(income , expense) ;
    
    const latest = data[data.length-1];
    if(latest){
        displayData(latest.description , latest.amount, latest.id);
    }
}

