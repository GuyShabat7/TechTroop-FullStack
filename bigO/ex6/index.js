const findDuplicates = function(arr) {
    arr.sort((a, b) => a - b);
    const duplicates = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            if (duplicates[duplicates.length - 1] !== arr[i]) {
                duplicates.push(arr[i]);
            }
        }
    }
    
    return duplicates;
};