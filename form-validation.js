const calcValidate = document.getElementById("calcForm");

function formValidation(event) {
    event.preventDefault();

    let mortgage = document.getElementById("mortgageAmount");
    let interest = document.getElementById("interestRate");
    let loanLength = document.getElementById("loanLength");
    let postalCode = document.getElementById("postalCode");

    let validMortgage = false, validInterest = false, validLoan = false, validPostalCode = false;
    
    let errors = document.getElementById("error");
    errors.innerHTML = "";
    let errorAlert = "<div class=\"alert alert-danger\" id=\"alertBox\"role=\"alert\"> <ul>"

    console.log(errors.innerHTML);
    if(isNaN(mortgage.value) || mortgage.value < 0 || mortgage.value.length <=0){
        errorAlert += "<li> Mortgage Amount must be a positive number! </li>";
        mortgage.classList.remove("is-valid");
        mortgage.classList.add("is-invalid");
    }
    else{
        mortgage.classList.remove("is-invalid");
        mortgage.classList.add("is-valid");
        validMortgage = true;
    }
    if(isNaN(interest.value) || interest.value < 0 || interest.value.length <= 0){
        errorAlert += "<li> Interest Rate must be a positive number. </li>"
        interest.classList.remove("is-valid")
        interest.classList.add("is-invalid")
    }
    else{
        interest.classList.remove("is-invalid")
        interest.classList.add("is-valid")
        validInterest = true;
    }
    if(isNaN(loanLength.value) || (loanLength.value < 5 || loanLength.value > 30) || loanLength.length <= 0 ){
        errorAlert += "<li> Loan Length must be between 5-30 years. </li>"
        loanLength.classList.remove("is-valid");
        loanLength.classList.add("is-invalid");
    }
    else{
        loanLength.classList.remove("is-invalid");
        loanLength.classList.add("is-valid");
        validLoan = true;
    }
    if(postalCode.value.length < 0 || postalCode.value.length > 7 || postalCode.value[0] != 'L'){
        errorAlert += "<li> Must be located in Hamilton </li>"
        postalCode.classList.remove("is-valid");
        postalCode.classList.add("is-invalid");
    }
    else{
        postalCode.classList.remove("is-invalid");
        postalCode.classList.add("is-valid");
        validPostalCode = true;
    }
    
    
    if(validMortgage && validInterest && validLoan && validPostalCode){
        errorAlert = "<div class=\"alert alert-success\" id=\"alertBox\"role=\"alert\"> <ul>"
        errorAlert += "<li>Your monthly mortgage payment is: $" + monthlyMortgage(mortgage.value,interest.value,loanLength.value) + "</li>";
    }
    errors.innerHTML = errorAlert;
    errors.innerHTML += "</ul> </div>";
    errorAlert = "";
}

function monthlyMortgage(principal, interest, numPayments){
    principal = parseFloat(principal);
    interest = parseFloat(interest) / 100 / 12;
    numPayments = parseFloat(numPayments) * 12;

    let monthlyMortgagePayment = (principal * (interest * (1 + interest) ** numPayments)) / ((1 + interest) ** numPayments - 1)
    console.log(Math.round(monthlyMortgagePayment));
    return Math.round(monthlyMortgagePayment);
}

function handleReset(event){
    let mortgage = document.getElementById("mortgageAmount");
    let interest = document.getElementById("interestRate");
    let loanLength = document.getElementById("loanLength");
    let postalCode = document.getElementById("postalCode");
    let errors = document.getElementById("error");

    errors.innerHTML = "";
    mortgage.classList.remove("is-invalid");
    mortgage.classList.remove("is-valid");
    
    interest.classList.remove("is-invalid");
    interest.classList.remove("is-valid");

    loanLength.classList.remove("is-invalid");
    loanLength.classList.remove("is-valid");

    postalCode.classList.remove("is-invalid");
    postalCode.classList.remove("is-valid");
}

calcValidate.addEventListener("submit", formValidation);
calcValidate.addEventListener("reset", handleReset);
