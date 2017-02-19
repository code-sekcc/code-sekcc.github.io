function validateForm() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    var email = document.forms["attend"]["email"].value;
    var valid = re.test(email)
    var name = document.forms["attend"]["name"].value;
    var z = email.search("sek.es");
<<<<<<< HEAD
    var code;
    if (z == -1) {
        document.getElementById("form-error-not-sek").className = "form-error animated fadeIn";
        document.getElementById("form-error-not-email").className = "form-error-hidden";
=======
    
    if (valid == false || name == "") {
        document.getElementById("form-error-not-email").className = "form-error animated fadeIn";
>>>>>>> 0241ecbac1cd472d8e6701d2ae85fe21cb184c8c
        return false;
    }
    else if (z == -1) {
        document.getElementById("form-error-not-sek").className = "form-error animated fadeIn";
        return false;
    }
    else {
        document.getElementById("form-error-not-email").className = "form-error-hidden";
        document.getElementById("form-error-not-sek").className = "form-error-hidden";
        return true;
    }
}
