const checkExists = function(array, num) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === num) {
            return true;
        }
    }
    return false;
}

console.log(checkExists([1,2,3],3));
console.log(checkExists([1,2,3],5));