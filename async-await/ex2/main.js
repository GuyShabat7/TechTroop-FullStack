async function getUserWithPosts(userId) {
    try {
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

        const user = await userResponse.json();
        const posts = await postsResponse.json();

        const combined = { user, posts };
        console.log(combined);
        return combined;
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}

getUserWithPosts(1);
