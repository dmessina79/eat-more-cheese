function frmfunction() {
 
    /* Grab Contact Information from form */
    var firstName = document.getElementsByName('fname')[0].value;
    var lastName = document.getElementsByName('lname')[0].value;
    var streetAddress = document.getElementsByName('saddress')[0].value;
    var city1 = document.getElementsByName('city')[0].value;
    var state1 = document.getElementsByName('state')[0].value;
    var zipCode = document.getElementsByName('zip')[0].value;
    var phoneNumber = document.getElementsByName('phonenumber')[0].value;

    /* Grab Billing Information from form */
    var creditCard = document.getElementsByName('ccnumber')[0].value;
    var expirationDate = document.getElementsByName('expdate')[0].value;
    var securityCode = document.getElementsByName('seccode')[0].value;

    /* Output to console */
    console.log(firstName);
    console.log(lastName);
    console.log(streetAddress);
    console.log(city1);
    console.log(state1);
    console.log(zipCode);
    console.log(phoneNumber);
    console.log(creditCard);
    console.log(expirationDate);
    console.log(securityCode);
}


