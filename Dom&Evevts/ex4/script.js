function validate() {
    const name = document.getElementById("nameInput").value;
    const salary = document.getElementById("salaryInput").value;
    const birthday = document.getElementById("birthDate").value;
    const phone = document.getElementById("phoneInput").value;
    const errMsg = document.getElementById("error-message");

    errMsg.innerHTML = "";

    if (name.length <= 2) {
        errMsg.innerHTML = "Name must be longer than 2 characters";
        return;
    }

    const salaryNum = Number(salary);
    if (salaryNum <= 10000 || salaryNum >= 16000) {
        errMsg.innerHTML = "Salary must be greater than 10,000 and less than 16,000";
        return;
    }

    if (!birthday) {
        errMsg.innerHTML = "Birthday may not be null";
        return;
    }

    if (phone.length !== 10) {
        errMsg.innerHTML = "Phone must be 10 digits long";
        return;
    }
}