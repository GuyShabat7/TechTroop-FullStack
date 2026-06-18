const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
};

function checkReservation() {
    const name = document.getElementById("nameInput").value;
    const messageElement = document.getElementById("message");

    if (reservations[name]) {
        if (reservations[name].claimed === false) {
            messageElement.innerHTML = "Welcome, " + name;
        } else {
            messageElement.innerHTML = "Hmm, someone already claimed this reservation";
        }
    } else {
        messageElement.innerHTML = "You have no reservation";
    }
}