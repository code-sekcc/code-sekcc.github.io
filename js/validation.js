function validateForm() {
    var x = document.forms["attend"]["email"].value;
    var y = document.forms["attend"]["name"].value;
    var z = x.search("sek.es");
    if (z == -1) {
        document.getElementById("form-error").className = "form-error";
        return false;
    }
}