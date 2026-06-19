function fetch(queryType, queryValue) {
    $.get("https://www.googleapis.com/books/v1/volumes?q=" + queryType + ":" + queryValue + "&key=AIzaSyAqcJsGBU9EereWl7hZ1cve4h_1Athn4DY", function(result) {
        result.items.forEach(function(item) {
            var info = item.volumeInfo;
            console.log("Title:", info.title);
            console.log("Author:", info.authors);
            console.log("ISBN:", info.industryIdentifiers[0].identifier);
        });
    });
}

fetch("title", "The Wise Man's Fears");
