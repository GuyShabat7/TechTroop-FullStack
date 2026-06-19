function fetch(queryType, queryValue) {
    $.get("https://www.googleapis.com/books/v1/volumes?q=" + queryType + ":" + queryValue + "&key=AIzaSyAqcJsGBU9EereWl7hZ1cve4h_1Athn4DY", function(result) {
        console.log(result);
    });
}

fetch("title", "The Wise Man's Fears");
