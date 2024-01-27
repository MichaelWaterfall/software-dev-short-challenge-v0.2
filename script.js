function submitButton() {
    console.log("Submit");
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let creditCardNumber = document.getElementById("card").value;
    let body = `${name} \n${email}\n${creditCardNumber}`;
    if(validateName(name) && validateEmail(email) && checkCreditCard(creditCardNumber)) {
        window.location.href = "mailto:challenge@dn-uk.com?&body="+ body;
    } else {
        let nameInput = document.getElementById("name");
        let emailInput = document.getElementById("email");
        let creditInput = document.getElementById("card");
        nameInput.style.borderColor = "rgb(231,0,100)";
        emailInput.style.borderColor = "rgb(231,0,100)";
        creditInput.style.borderColor = "rgb(231,0,100)";

    }

}

function checkCreditCard() {
    let input = document.getElementById("card");
    let creditCardNumber = input.value;

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
                    if(finalTotal % 10 == 0) {
                        input.style.borderColor = "Green";
                        return true;
                    } else {
                        input.style.borderColor = "rgb(231,0,100)";
                        return false;
                    }
                    console.log(finalTotal % 10 == 0);
                    input.style.borderColor = "Green";
                    return finalTotal % 10 == 0;
                }
            }
        } else {
            console.log("Credit Card Number cannot add up to zero.");
            input.style.borderColor = "rgb(231,0,100)";
        }
    } else {
        console.log(creditCardArray);
        console.log("Credit Card Number must be 16 numbers long.");
        input.style.borderColor = "rgb(231,0,100)";
    }
    
}

function validateName() {
    let input = document.getElementById("name");
    let name = input.value;
    const nameRegex = /^([a-zA-z,/.-]+){2}\s([a-zA-z,/.-]+){2}$/;
    //const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(nameRegex.test(name)) {
        console.log("name is valid");
        input.style.borderColor = "Green";
        return true;
    } else {
        input.style.borderColor = "rgb(231,0,100)";
        console.log("name is not valid");
    }
}

function validateEmail() {
    let input = document.getElementById("email");
    let email = input.value;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailRegex.test(email)) {
        input.style.borderColor = "Green";
        return true;
    } else {
        input.style.borderColor = "rgb(231,0,100)";
    }
}

/*
if(checkCreditCard("79927398713")) {
    console.log("Credit Card Number is valid");
} else {
    console.log("Credit Card Number is not valid");
}

checkCreditCard("1234567891234567");*/