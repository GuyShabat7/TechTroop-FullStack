const posts = [
    { name: "Uncle Jerome", text: "Happy birthday kido!" },
    { name: "BFF Charlene", text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD" },
    { name: "Old High School Teacher", text: "Hey ace, have a good one." } 
];

function render() {
    const container = document.getElementById("postsContainer");

    contaner.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {
        const postDiv = document.createElement("div");
        postDiv.innerHTML = "<strong>" + post[i].name + ":<strong> " + posts[i].text;
        container.appendChild(postDiv);
    }
}

function addPost() {
    const nameInput = document.getElementById("nameInput");
    const textInput = document.getElementById("textInput");

    posts.push({name: nameInput.ariaValueMax, text: textInput.value});

    render();

    nameInput.value = "";
    textInput.value = "";
}

render();