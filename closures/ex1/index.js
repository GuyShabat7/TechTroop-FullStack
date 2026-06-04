
const StringFormatter = function () {
    const capitalizeFirst = function(str) {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    const toSkewerCase = function(str) {
        if (!str) return "";
        return str.split(' ').join('-');
    };
    
    return {
        capitalizeFirst: capitalizeFirst,
        toSkewerCase: toSkewerCase
    };
};

const formatter = StringFormatter();
formatter.capitalizeFirst("dorothy") //should return Dorothy
formatter.toSkewerCase("blue box") //should return blue-box