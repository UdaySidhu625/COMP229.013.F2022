/*File Name : contact.js 
Name : Uday Partap Singh Sidhu
Student Id : 301237202
Date : October 8,2022
*/

var x=0;

function lNameValidation() {
    var lastname = document.getElementById("lastname");
    var lastNameErrorDiv = document.getElementById("errorLastName");
    try {
        if (lastname.value.length < 1) {
            throw "Kindly Enter a Last Name";
        }
        lastname.style.background = "";
        lastNameErrorDiv.style.display = "none";
        lastNameErrorDiv.innerHTML = "";
        profilelastname = lastname.value;
        x+=1;
       
    }

    catch (msg) {
        lastNameErrorDiv.style.display = "block";
        lastNameErrorDiv.innerHTML = msg;
        lastname.style.background = "rgb(255,233,233)";
    }
}

function fNameValidation() {
    var firstname = document.getElementById("firstname");
    var firstNameErrorDiv = document.getElementById("errorFirstName");
    try {
        if (firstname.value.length < 1) {
            throw "Kindly Enter a First Name";
        }
        firstname.style.background = "";
        firstNameErrorDiv.style.display = "none";
        firstNameErrorDiv.innerHTML = "";
        profilefirstname = firstname.value;
        x+=1;

    }

    catch (msg) {
        firstNameErrorDiv.style.display = "block";
        firstNameErrorDiv.innerHTML = msg;
        firstname.style.background = "rgb(255,233,233)";
    }
}



function addressValidation() {
    var Address = document.getElementById("addressOfmember");
    var errorDiv = document.getElementById("errorAddress");
    try {
        if (Address.value < 1) {
            throw "Kindly Provide An Address";
        }
        Address.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profileAddress = Address.value;
        x+=1;
    }

    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        Address.style.background = "rgb(255,233,233)";
    }
}

function ageValidation() {
    var Age = document.getElementById("age");
    var ageErrorDiv = document.getElementById("errorAge");
    try {
        if (Age.value < 18) {
            throw "Age should be greater than 18 years old";
        }
        Age.style.background = "";
        ageErrorDiv.style.display = "none";
        ageErrorDiv.innerHTML = "";
        profileAge = Age.value;
        x+=1;
    }

    catch (msg) {
        ageErrorDiv.style.display = "block";
        ageErrorDiv.innerHTML = msg;
        Age.style.background = "rgb(255,233,233)";
    }
}

function cityValidation() {
    var City = document.getElementById("city");
    var cityErrorDiv = document.getElementById("errorOfCity");
    try {
        if (City.value.length < 1) {
            throw "Kindly enter a City";
        }
        City.style.background = "";
        cityErrorDiv.style.display = "none";
        cityErrorDiv.innerHTML = "";
        profileCity = City.value;
        x+=1;
    }

    catch (msg) {
        cityErrorDiv.style.display = "block";
        cityErrorDiv.innerHTML = msg;
        City.style.background = "rgb(255,233,233)";
    }
}



function emailValidation() {
    var inputMail = document.getElementById("email");
    var divEmailError = document.getElementById("errorEmail");
    try {
        if (inputMail.value.search("@") === -1 || inputMail.value.lastIndexOf(".") === -1) {
            throw "Kindly Provide An Acceptable Email Address";
        }
        inputMail.style.background = "";
        divEmailError.innerHTML = "";
        divEmailError.style.display = "none";
        inputMail.value = inputMail.value.toLowerCase();
        profileemail = inputMail.value;
        x+=1;
    }

    catch (msg) {
        divEmailError.innerHTML = msg;
        divEmailError.style.display = "block";
        inputMail.style.background = "rgb(255,233,233)";
    }
}

function provinceValidation() {
    var Province = document.getElementById("province");
    var errorProvinceDiv = document.getElementById("errorProvince");
    var provinceCheck = /^(QC|ON|MN|SK|AB|BC)$/
    try {
        if (provinceCheck.test(Province.value) === false) {
            throw "Province should be ON or AB or SK or MN or QC or BC";
        }
        Province.style.background = "";
        errorProvinceDiv.style.display = "none";
        errorProvinceDiv.innerHTML = "";
        profileProvince = Province.value;
        x+=1;
    }

    catch (msg) {
        errorProvinceDiv.style.display = "block";
        errorProvinceDiv.innerHTML = msg;
        Province.style.background = "rgb(255,233,233)";
    }
}

function passwordValidation() {
    var passwordfirst = document.getElementById("passwordfirst");
    var passwordsecond = document.getElementById("passwordsecond");
    var passwordErrorDiv = document.getElementById("errorPassword");
    try {
        if (passwordfirst.value.length < 6) {
            throw "Kindly Enter A Query";
        }
        
    }

    catch (msg) {
        passwordErrorDiv.style.display = "block";
        passwordErrorDiv.innerHTML = msg;
        passwordfirst.style.background = "rgb(255,233,233)";
        passwordsecond.style.background = "rgb(255,233,233)";
    }
}

function postalCodeValidation() {
    var postalCode = document.getElementById("zipcode");
    var errorPostalCodeDiv = document.getElementById("errorPostalCode");
    var postalCodeCheck = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
    try {
        if (postalCodeCheck.test(postalCode.value) === false) {
            throw "Kindly enter an acceptable Postal Code";
        }
        postalCode.style.background = "";
        errorPostalCodeDiv.style.display = "none";
        errorPostalCodeDiv.innerHTML = "";
        profilePostalCode = postalCode.value;
        x+=1;
    }

    catch (msg) {
        errorPostalCodeDiv.style.display = "block";
        errorPostalCodeDiv.innerHTML = msg;
        postalCode.style.background = "rgb(255,233,233)";
    }
}
 


function setUpPages() {
    fNameValidation();
    lNameValidation();
    addressValidation()
    ageValidation();
    cityValidation();
    postalCodeValidation();
    provinceValidation();
    passwordValidation();
    emailValidation();
    
    if(x===9){
        window.alert("Your data has been submitted thank you for registering");
    }
    
    
}

function clearForm() {
    document.getElementById("formOfRegistration").reset();
}

var submit = document.getElementById("btnSubmit");
var clear = document.getElementById("btnClear");

if (submit.addEventListener) {
    submit.addEventListener("click", setUpPages, false);
} else if (submit.attachEvent) {
    submit.attachEvent("onclick", setUpPages);
}

if (clear.addEventListener) {
    clear.addEventListener("click", clearForm, false);
} else if (clear.attachEvent) {
    clear.attachEvent("onclick", clearForm);
}