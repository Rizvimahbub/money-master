let salaryAmount = document.getElementById('total-income');
let foodCost = document.getElementById('food-cost');
let rentCost = document.getElementById('rent-cost');
let clothesCost = document.getElementById('clothes-cost');
let totalExpenses = document.getElementById('total-expenses');
let restBalance = document.getElementById('rest-balance');   
let savingPercentageInput = document.getElementById('saving-percentage');
let totalSavings = document.getElementById('saving-amount');
let balanceRemaining = document.getElementById('remaining-balance');

function totalExpensesCount(){

    let inputFoodCost = parseFloat(foodCost.value);
    let inputRentCost = parseFloat(rentCost.value);
    let inputClothesCost = parseFloat(clothesCost.value);
    let totalExpensesAmount = inputFoodCost + inputRentCost + inputClothesCost;

    if(document.getElementById('food-cost').value.trim() == ''){

        totalExpensesAmount = inputRentCost + inputClothesCost;

        totalExpenses.innerText = totalExpensesAmount;

    }
    else if(document.getElementById('rent-cost').value.trim() == ''){

        totalExpensesAmount = inputFoodCost + inputClothesCost;

        totalExpenses.innerText = totalExpensesAmount;

    }
    else if(document.getElementById('clothes-cost').value.trim() == ''){

        totalExpensesAmount = inputFoodCost + inputRentCost ;

        totalExpenses.innerText = totalExpensesAmount;

    }
    else if(document.getElementById('total-income').value.trim() == ''){

        totalExpensesAmount = inputFoodCost + inputRentCost +  inputClothesCost;

        totalExpenses.innerText = totalExpensesAmount;

    }
    else{

        totalExpensesAmount = inputFoodCost + inputRentCost + inputClothesCost;

        totalExpenses.innerText = totalExpensesAmount;

    }
    
    return totalExpensesAmount;
    
}

function balance(){

    let salary = parseFloat(salaryAmount.value);

    let balanceRemaining = salary - totalExpensesCount();

    if(document.getElementById('total-income').value.trim() == ''){

        restBalance.innerText = 'Sorry!! Income amount is not available.';

    }
    else{

        restBalance.innerText = balanceRemaining;

    }
    
    return balanceRemaining;

}

function savingsAmount(){

    let salary = parseFloat(salaryAmount.value);

    let restBalanceAmount = parseFloat(restBalance.innerText);

    let savingPercentage = parseFloat(savingPercentageInput.value) / 100;

    let savingTotal = savingPercentage * salary;

    if(restBalanceAmount < savingTotal){

        totalSavings.innerText = 'Invalid amount'

    }
    else if(document.getElementById('total-income').value.trim() == ''){

        totalSavings.innerText = 'Sorry!! Income amount is not available.';

    }
    else{

        totalSavings.innerText = savingTotal;

    }
    return savingTotal;
}


function remainingBalance(){

    let remainingBalanceAmount = balance() - savingsAmount();

    if(remainingBalanceAmount < 0){

        balanceRemaining.innerText = 'Invalid amount';

    }
    else if(document.getElementById('total-income').value.trim() == ''){

        balanceRemaining.innerText  = 'Sorry!! Savings amount is not available.';

        document.getElementById('')

    }
    else{

        balanceRemaining.innerText = remainingBalanceAmount;

    }
    

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
    
    let totalExpensesAmount = parseFloat(totalExpenses.innerText);
    document.getElementById('total-expenses').innerText = totalExpensesAmount;


    if(salary < 0 && inputFoodCost < 0 && inputRentCost < 0 && inputClothesCost < 0){

        document.getElementById('income-error-msg').innerText = 'Please type a positive number';
        document.getElementById('food-error-msg').innerText = 'Please type a positive number';
        document.getElementById('rent-error-msg').innerText = 'Please type a positive number';
        document.getElementById('clothes-error-msg').innerText = 'Please type a positive number';
        document.getElementById('total-expenses').innerText = '';
        document.getElementById('rest-balance').innerText = '';
        document.getElementById('saving-amount').innerText = '';
        document.getElementById('remaining-balance').innerText = '';
    }
    else if(salary < 0 && inputFoodCost < 0 && inputRentCost < 0){

        document.getElementById('income-error-msg').innerText = 'Please type a positive number';
        document.getElementById('food-error-msg').innerText = 'Please type a positive number';
        document.getElementById('rent-error-msg').innerText = 'Please type a positive number';
        document.getElementById('total-expenses').innerText = '';
        document.getElementById('rest-balance').innerText = '';
        document.getElementById('saving-amount').innerText = '';
        document.getElementById('remaining-balance').innerText = '';

    }
    else if(salary < 0 && inputClothesCost < 0 && inputRentCost < 0){

        document.getElementById('income-error-msg').innerText = 'Please type a positive number';
        document.getElementById('clothes-error-msg').innerText = 'Please type a positive number';
        document.getElementById('rent-error-msg').innerText = 'Please type a positive number';
        document.getElementById('total-expenses').innerText = '';
        document.getElementById('rest-balance').innerText = '';
        document.getElementById('saving-amount').innerText = '';
        document.getElementById('remaining-balance').innerText = '';

    }
    else if(salary < 0 && inputClothesCost < 0 && inputFoodCost < 0){

        document.getElementById('income-error-msg').innerText = 'Please type a positive number';
        document.getElementById('clothes-error-msg').innerText = 'Please type a positive number';
        document.getElementById('food-error-msg').innerText = 'Please type a positive number';
        document.getElementById('total-expenses').innerText = '';
        document.getElementById('rest-balance').innerText = '';
        document.getElementById('saving-amount').innerText = '';
        document.getElementById('remaining-balance').innerText = '';

    }
    else if(inputRentCost < 0 && inputClothesCost < 0 && inputFoodCost < 0){

        document.getElementById('rent-error-msg').innerText = 'Please type a positive number';
        document.getElementById('clothes-error-msg').innerText = 'Please type a positive number';
        document.getElementById('food-error-msg').innerText = 'Please type a positive number';
        document.getElementById('total-expenses').innerText = '';
        document.getElementById('rest-balance').innerText = '';
        document.getElementById('saving-amount').innerText = '';
        document.getElementById('remaining-balance').innerText = '';

    }
    else if(salary < 0 && inputFoodCost < 0){

        document.getElementById('income-error-msg').innerText = 'Please type a positive number';
        document.getElementById('food-error-msg').innerText = 'Please type a positive number';
        document.getElementById('total-expenses').innerText = '';
        document.getElementById('rest-balance').innerText = '';
        document.getElementById('saving-amount').innerText = '';
        document.getElementById('remaining-balance').innerText = '';

    }
    else if(salary < 0 && inputRentCost < 0){

        document.getElementById('income-error-msg').innerText = 'Please type a positive number';
        document.getElementById('rent-error-msg').innerText = 'Please type a positive number';
        document.getElementById('total-expenses').innerText = '';
        document.getElementById('rest-balance').innerText = '';
        document.getElementById('saving-amount').innerText = '';
        document.getElementById('remaining-balance').innerText = '';

    }
    else if(salary < 0 && inputClothesCost < 0){

        document.getElementById('income-error-msg').innerText = 'Please type a positive number';
        document.getElementById('clothes-error-msg').innerText = 'Please type a positive number';
        document.getElementById('total-expenses').innerText = '';
        document.getElementById('rest-balance').innerText = '';
        document.getElementById('saving-amount').innerText = '';
        document.getElementById('remaining-balance').innerText = '';

    }
    else if(inputFoodCost < 0 && inputClothesCost < 0){

        document.getElementById('food-error-msg').innerText = 'Please type a positive number';
        document.getElementById('clothes-error-msg').innerText = 'Please type a positive number';
        document.getElementById('total-expenses').innerText = '';
        document.getElementById('rest-balance').innerText = '';
        document.getElementById('saving-amount').innerText = '';
        document.getElementById('remaining-balance').innerText = '';

    }
    else if(inputFoodCost < 0 && inputRentCost < 0){

        document.getElementById('food-error-msg').innerText = 'Please type a positive number';
        document.getElementById('rent-error-msg').innerText = 'Please type a positive number';
        document.getElementById('total-expenses').innerText = '';
        document.getElementById('rest-balance').innerText = '';
        document.getElementById('saving-amount').innerText = '';
        document.getElementById('remaining-balance').innerText = '';

    }
    else if(inputClothesCost < 0 && inputRentCost < 0){

        document.getElementById('clothes-error-msg').innerText = 'Please type a positive number';
        document.getElementById('rent-error-msg').innerText = 'Please type a positive number';
        document.getElementById('total-expenses').innerText = '';
        document.getElementById('rest-balance').innerText = '';
        document.getElementById('saving-amount').innerText = '';
        document.getElementById('remaining-balance').innerText = '';

    }
    else if(inputFoodCost < 0){

        document.getElementById('food-error-msg').innerText = 'Please type a positive number';
        document.getElementById('total-expenses').innerText = '';
        document.getElementById('rest-balance').innerText = '';
        document.getElementById('saving-amount').innerText = '';
        document.getElementById('remaining-balance').innerText = '';

    }
    else if(inputRentCost < 0){

        document.getElementById('rent-error-msg').innerText = 'Please type a positive number';
        document.getElementById('total-expenses').innerText = '';
        document.getElementById('rest-balance').innerText = '';
        document.getElementById('saving-amount').innerText = '';
        document.getElementById('remaining-balance').innerText = '';

    }
    else if(inputClothesCost < 0){
        
        document.getElementById('clothes-error-msg').innerText = 'Please type a positive number';
        document.getElementById('total-expenses').innerText = '';
        document.getElementById('rest-balance').innerText = '';
        document.getElementById('saving-amount').innerText = '';
        document.getElementById('remaining-balance').innerText = '';

    }
    else if(salary < 0){

        document.getElementById('income-error-msg').innerText = 'Please type a positive number';
        document.getElementById('total-expenses').innerText = '';
        document.getElementById('rest-balance').innerText = '';
        document.getElementById('saving-amount').innerText = '';
        document.getElementById('remaining-balance').innerText = '';

    }
    else if(totalExpensesAmount > salary){

        document.getElementById('total-expenses').innerText = 'Your can not spend more money than your income';

        document.getElementById('total-expenses').style.color = 'red';

        document.getElementById('rest-balance').innerText = 'Invalid amount';

        document.getElementById('rest-balance').style.color = 'red';

        document.getElementById('saving-amount').innerText = '';

        document.getElementById('remaining-balance').innerText = '';

        document.getElementById('income-error-msg').innerText = '';

        document.getElementById('food-error-msg').innerText = '';

        document.getElementById('rent-error-msg').innerText = '';

        document.getElementById('clothes-error-msg').innerText = '';

    }
    else{

        document.getElementById('income-error-msg').innerText = '';

        document.getElementById('food-error-msg').innerText = '';

        document.getElementById('rent-error-msg').innerText = '';

        document.getElementById('clothes-error-msg').innerText = '';
        
         
    }

    return;
}


function emptyErrorHandling(){

    let salary = parseFloat(salaryAmount.value);
    document.getElementById('total-income').value = salary;
    
    let inputFoodCost = parseFloat(foodCost.value);
    document.getElementById('food-cost').value = inputFoodCost;

    let inputRentCost = parseFloat(rentCost.value);
    document.getElementById('rent-cost').value = inputRentCost;

    let inputClothesCost = parseFloat(clothesCost.value);
    document.getElementById('clothes-cost').value = inputClothesCost;
    
    let totalExpensesAmount = parseFloat(totalExpenses.innerText);
    document.getElementById('total-expenses').innerText = totalExpensesAmount;

    if(document.getElementById('total-income').value.trim() == ''){

        alert( "Please put an amount in the income amount box" );
        
    }
    else if(document.getElementById('food-cost').value.trim() == ''){

        alert( "Please put an amount in the food amount box" );
        
    }
    else if(document.getElementById('rent-cost').value.trim() == ''){

        alert( "Please put an amount in the rent amount box" );
        
    }
    else if(document.getElementById('clothes-cost').value.trim() == ''){

        alert( "Please put an amount in the clothes amount box" );
        
    }
    return;
}



document.getElementById('expense-calculate-btn').addEventListener('click',function(){

    totalExpensesCount();

    balance();

    negativeErrorHandling();

    emptyErrorHandling();

});



document.getElementById('percentage-calculate-btn').addEventListener('click',function(){

    savingsAmount();

    remainingBalance();

    negativeErrorHandling();

});


