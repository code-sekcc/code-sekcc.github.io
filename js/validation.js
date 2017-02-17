function validateForm() {
    var x = document.forms["attend"]["email"].value;
    var x = document.forms["attend"]["name"].value;
    if (x == "" || y == "") {
        document.getElementById("form-error").className = "form-error";
        return false;
    }
}