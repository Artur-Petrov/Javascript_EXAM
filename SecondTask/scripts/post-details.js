// getting posts id
const postId = new URL(location.href).searchParams.get('id');

let postContainer = document.getElementById('post-container');
let commentsContainer = document.getElementById('comments-container');

//output for information about post
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
.then(response => response.json())
.then(post => {
    postContainer.innerHTML = `
    <h3>Title: ${post.title}</h3>
    <p><b>User id:</b> ${post.userId}</p>
    <p><b>Id:</b> ${post.id}</p>
    <p><b>Body:</b> ${post.body}</p>
    `;
})
// output for comments
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
.then(response => response.json())
.then(comments => {
    for (const comment of comments) {
        let commentDiv = document.createElement('div');
        commentDiv.classList.add('comment-card');

        commentDiv.innerHTML = `
        <h5><b>Id:</b> ${comment.id}</h5>
        <p><b>Post id:</b> ${comment.postId}</p>
        <p><b>Name:</b> ${comment.name}</p>
        <p><b>Email:</b> ${comment.email}</p>
        <p><b>Body:</b> ${comment.body}</p>
        `;

        commentsContainer.appendChild(commentDiv);
    }
})