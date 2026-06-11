function simplify(str) {
    let symbols = ["!", "#", ".", ",", "'"];
    return str.split("").filter(c => symbols.indexOf(c) == -1).join("");
}

module.exports = { simplify };