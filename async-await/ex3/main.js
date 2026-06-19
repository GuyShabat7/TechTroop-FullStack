async function createDashboard() {
    try {
        const [usersResponse, postsResponse, commentsResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users'),
            fetch('https://jsonplaceholder.typicode.com/posts'),
            fetch('https://jsonplaceholder.typicode.com/comments')
        ]);

        const [users, posts, comments] = await Promise.all([
            usersResponse.json(),
            postsResponse.json(),
            commentsResponse.json()
        ]);

        const totalUsers = users.length;
        const totalPosts = posts.length;
        const totalComments = comments.length;
        const avgPostsPerUser = totalPosts / totalUsers;
        const avgCommentsPerPost = totalComments / totalPosts;

        const topUsers = users.map(function(user) {
            const userPosts = posts.filter(function(post) {
                return post.userId === user.id;
            });
            const userPostIds = userPosts.map(function(post) { return post.id; });
            const commentCount = comments.filter(function(comment) {
                return userPostIds.includes(comment.postId);
            }).length;
            return {
                name: user.name,
                postCount: userPosts.length,
                commentCount: commentCount
            };
        }).sort(function(a, b) {
            return b.postCount - a.postCount;
        }).slice(0, 3);

        const recentPosts = posts.sort(function(a, b) {
            return b.id - a.id;
        }).slice(0, 5);

        const dashboard = {
            summary: {
                totalUsers,
                totalPosts,
                totalComments,
                avgPostsPerUser,
                avgCommentsPerPost
            },
            topUsers,
            recentPosts
        };

        console.log(dashboard);
        return dashboard;
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}

createDashboard();
