function fetch(isbn) {
    $.get("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn + "&key=AIzaSyAqcJsGBU9EereWl7hZ1cve4h_1Athn4DY", function(result) {
        console.log(result);
    });
}

fetch(9780307417138);
