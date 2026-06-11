function validate(arr) {
    const booleansOnly = arr.filter(item => typeof item === 'boolean');

    if (booleansOnly.length === 0) {
        return { error: "Need at least one boolean" };
    }

    const truesCount = booleansOnly.filter(b => b === true).length;
    const falsesCount = booleansOnly.filter(b => b === false).length;

    return truesCount > falsesCount;
}

module.exports = { validate };