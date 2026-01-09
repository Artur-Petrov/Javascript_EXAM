// getting posts id
const postId = new URL(location.href).searchParams.get('id');

let postContainer = document.getElementById('post-container');
let commentsContainer = document.getElementById('comments-container');

//output for information about post
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
.then(response => response.json())
.then(post => {
    postContainer.innerHTML = `
    <h3>${post.title}</h3>
    <p>User id: ${post.userId}</p>
    <p>Id: ${post.id}</p>
    <p>${post.body}</p>
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
        <h5>Id: ${comment.id}</h5>
        <p>Post id: ${comment.postId}</p>
        <p>Name: ${comment.name}</p>
        <p>Email: ${comment.email}</p>
        <p>Body: ${comment.body}</p>
        `;

        commentsContainer.appendChild(commentDiv);
    }
})