let salaryAmount = document.getElementById('total-income');
let foodCost = document.getElementById('food-cost');
let rentCost = document.getElementById('rent-cost');
let clothesCost = document.getElementById('clothes-cost');
let totalExpenses = document.getElementById('total-expenses');
let restBalance = document.getElementById('rest-balance');   
let savingPercentageInput = document.getElementById('saving-percentage');
let totalSavingAmout = document.getElementById('saving-amount');
let balanceRemaining = document.getElementById('remaining-balance');

function totalExpensesCount(){

    let inputFoodCost = parseFloat(foodCost.value);
    let inputRentCost = parseFloat(rentCost.value);
    let inputClothesCost = parseFloat(clothesCost.value);

    
    let totalExpensesAmount = inputFoodCost + inputRentCost + inputClothesCost;
    totalExpenses.innerText = totalExpensesAmount;
    return totalExpensesAmount;
    
}

function balance(){

    let salary = parseFloat(salaryAmount.value);

    let balanceRemaining = salary - totalExpensesCount();

    restBalance.innerText = balanceRemaining;

    return balanceRemaining;

}

function savingsAmount(){

    let salary = parseFloat(salaryAmount.value);

    let savingPercentage = parseFloat(savingPercentageInput.value) / 100;

    let savingTotal = savingPercentage * salary;

    totalSavingAmout.innerText = savingTotal;

    return savingTotal;
}

function remainingBalance(){

    let remainingBalanceAmount = balance() - savingsAmount();

    balanceRemaining.innerText = remainingBalanceAmount;

    return remainingBalanceAmount;

}


function negativeErrorHandling(){

    let salary = parseFloat(salaryAmount.value);
    document.getElementById('total-income').value = salary;
    
    let inputFoodCost = parseFloat(foodCost.value);
    document.getElementById('food-cost').value = inputFoodCost;

    let inputRentCost = parseFloat(rentCost.value);
    document.getElementById('rent-cost').value = inputRentCost;

    let inputClothesCost = parseFloat(clothesCost.value);
    document.getElementById('clothes-cost').value = inputClothesCost;

    if(salary < 0 && inputFoodCost < 0 && inputRentCost < 0 && inputClothesCost < 0){
        document.getElementById('income-error-msg').innerText = 'Please type a positive number';
        document.getElementById('food-error-msg').innerText = 'Please type a positive number';
        document.getElementById('rent-error-msg').innerText = 'Please type a positive number';
        document.getElementById('clothes-error-msg').innerText = 'Please type a positive number';
        
        document.getElementById('total-income').style.border = '1px solid red';
        document.getElementById('food-income').style.border = '1px solid red';
        document.getElementById('rent-cost').style.border = '1px solid red';
        document.getElementById('clothes-cost').style.border = '1px solid red';
    }
    else if(salary < 0){
        document.getElementById('income-error-msg').innerText = 'Please type a positive number';
        document.getElementById('total-income').style.border = '1px solid red';
    }
    else if(inputFoodCost < 0){
        document.getElementById('food-error-msg').innerText = 'Please type a positive number';
        document.getElementById('food-cost').style.border = '1px solid red';
    }
    else if(inputRentCost < 0){
        document.getElementById('rent-error-msg').innerText = 'Please type a positive number';
        document.getElementById('rent-cost').style.border = '1px solid red';
    }
    else if(inputClothesCost < 0){
        document.getElementById('clothes-error-msg').innerText = 'Please type a positive number';
        document.getElementById('clothes-cost').style.border = '1px solid red';
    }
    return;
}


document.getElementById('expense-calculate-btn').addEventListener('click',function(){

    totalExpensesCount();

    balance();

    negativeErrorHandling();
});



document.getElementById('percentage-calculate-btn').addEventListener('click',function(){

    savingsAmount();

    remainingBalance()

});


