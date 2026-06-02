const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
};

const name = 'bob';
const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

if (reservations[formattedName]) {
  if (!reservations[formattedName].claimed) {
        console.log("Welcome, " + formattedName);
  } else {
        console.log("Hmm, someone already claimed this reservation");
  }
} else {
    reservations[formattedName] = { claimed: true };
    console.log(reservations);
}