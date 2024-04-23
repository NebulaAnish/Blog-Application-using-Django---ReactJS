export function generateDummyBlogPostData(numPosts) {
    const dummyData = [];
    for(let i = 1; i <= numPosts; i++) {
        const post = {
            id: i,
            title: `Post Title ${i}`,
            date: new Date().toISOString(),
            content: `This is the content of post ${i}. This is just dummy data.`,
            author: `Author ${i}`,
        };
        dummyData.push(post);
    }
    return dummyData;
}
