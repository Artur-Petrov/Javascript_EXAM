// getting users id

const userId = new URL(location.href).searchParams.get('id');

let userDetailsContainer = document.getElementById('user-details');
let postsBtn = document.getElementById('posts-btn');
let postsContainer = document.getElementById('posts-container');

//getting information about users
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
.then(res => res.json())
.then(user=> {
    userDetailsContainer.innerHTML = `
<ul>
    <li><b>Id:</b> ${user.id}</li>
    <li><b>Name:</b> ${user.name}</li>
    <li><b>Username:</b> ${user.username}</li>
    <li><b>Email:</b> ${user.email}</li>
    <li><b>Phone:</b> ${user.phone}</li>
    <li><b>Website:</b> ${user.website}</li>

    <li><b>Address:</b>
        <ol>
            <li><b>Street:</b> ${user.address.street}</li>
            <li><b>Suite:</b> ${user.address.suite}</li>
            <li><b>City:</b> ${user.address.city}</li>
            <li><b>Zipcode:</b> ${user.address.zipcode}</li>
            <li><b>Geo:</b> ${user.address.geo.lat}, ${user.address.geo.lng}</li>
        </ol>
    </li>

    <li><b>Company:</b>
        <ol>
            <li><b>Name:</b> ${user.company.name}</li>
            <li><b>Catch Phrase:</b> ${user.company.catchPhrase}</li>
            <li><b>BS:</b> ${user.company.bs}</li>
        </ol>
    </li>
</ul>
    `;
})

// button post
postsBtn.addEventListener('click', () => {
    postsContainer.innerHTML = ``;
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(res => res.json())
    .then(posts => {
        for (const post of posts) {
            //container for posts titles
            let postContainer = document.createElement('div');
            postContainer.classList.add('posts-block');
            postContainer.innerHTML = `<h3>${post.title}</h3>`
            // link for directing to post-details.html
            let postLink = document.createElement('a');
            postLink.classList.add('post-link');
            postLink.innerText = `Post Details`;
            postLink.href = `post-details.html?id=${post.id}`;

            postContainer.appendChild(postLink);
            postsContainer.appendChild(postContainer);
        }
    })
})