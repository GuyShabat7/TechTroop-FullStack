$.get("https://www.googleapis.com/books/v1/volumes?q=intitle:Name+of+the+Wind&key=AIzaSyAqcJsGBU9EereWl7hZ1cve4h_1Athn4DY", function(result) {
    console.log(result.items[0].volumeInfo.description);
});
