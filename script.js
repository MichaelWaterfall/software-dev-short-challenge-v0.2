function submitButton() {
    console.log("Submit");
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let creditCard = document.getElementById("card").value;
    if(validateName(name) && validateEmail(email) && checkCreditCard(creditCardNumber)) {
        window.location.href = "mailto:challenge@dn-uk.com?subject="+ name + email + "&body="+creditCard;
    }

}

function checkCreditCard(creditCardNumber) {

    //Convert string input into an array of integers
    let creditCardArray = [];
    for(let i = 0; i < creditCardNumber.length; i++) {
        creditCardArray.push(Number(creditCardNumber[i]));
    }
    console.log(creditCardArray);
    
    if(creditCardArray.length == 16) {
        let total = 0;
        for(let i = 0; i < creditCardArray.length; i++) {
            total += creditCardArray[i];
        }
        console.log(total);
        if(total > 0) {
            for(let i = 0; i < creditCardArray.length; i++) {
                //console.log("test");
                if(i % 2 != 0) {
                    console.log(creditCardArray[i]);
                    let tempValue = creditCardArray[i];
                    tempValue *= 2;

                    if(tempValue > 9) {
                        //Convert to integer to string then I can seperate the elements in order to add them together
                        tempValue.toString();
                        tempValue = Number(tempValue[0]) + Number(tempValue[1]);
                    }
                    creditCardArray[i] = tempValue;
                    let finalTotal = 0;
                    for(let i = 0; i < creditCardArray.length; i++) {
                        finalTotal += creditCardArray[i];
                    }
                    console.log(finalTotal % 10 == 0);
                    return finalTotal % 10 == 0;
                }
            }
        } else {
            console.log("Credit Card Number cannot add up to zero.");
        }
    } else {
        console.log("Credit Card Number must be 16 numbers long.");
    }
    
}

function validateName(input) {
    let name = document.getElementById("name").value;
    const nameRegex = /^([a-zA-z,/.-]+)\s([a-zA-z,/.-]+)$/;
    if(nameRegex.test(name)) {
        console.log("name is valid");
        input.style.borderColor = "Green";
        return true;
    } else {
        input.style.borderColor = "rgb(231,0,100)";
        console.log("name is not valid");
    }
}

function validateEmail(input) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
}

/*
if(checkCreditCard("79927398713")) {
    console.log("Credit Card Number is valid");
} else {
    console.log("Credit Card Number is not valid");
}

checkCreditCard("1234567891234567");*/