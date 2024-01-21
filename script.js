function checkCreditCard(creditCardNumber) {

    //Convert string input into an array of integers
    let creditCardArray = [];
    for(let i = 0; i < creditCardNumber.length; i++) {
        creditCardArray.push(Number(creditCardNumber[i]));
    }
    console.log(creditCardArray);
    /*
    if(creditCardArray.length == 16) {
        let total = 0;
        for(let i = 0; i < creditCardNumber.length; i++) {
            total += Number(creditCardNumber[i]);
        }
        console.log(total);
        if(total > 0) {
            for(let i = 0; i < creditCardNumber.length; i++) {
                //console.log("test");
                if(i % 2 != 0) {
                    console.log(creditCardNumber[i]);
                }
            }
        } else {
            console.log("Credit Card Number cannot add up to zero.");
        }
    } else {
        console.log("Credit Card Number must be 16 numbers long.");
    }
    */
}

if(checkCreditCard("79927398713")) {
    console.log("Credit Card Number is valid");
} else {
    console.log("Credit Card Number is not valid");
}

checkCreditCard("1234567891234567");