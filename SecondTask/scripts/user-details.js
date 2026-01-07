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
    <li>Id: ${user.id}</li>
    <li>Name: ${user.name}</li>
    <li>Username: ${user.username}</li>
    <li>Email: ${user.email}</li>
    <li>Phone: ${user.phone}</li>
    <li>Website: ${user.website}</li>

    <li>Address:
        <ol>
            <li>Street: ${user.address.street}</li>
            <li>Suite: ${user.address.suite}</li>
            <li>City: ${user.address.city}</li>
            <li>Zipcode: ${user.address.zipcode}</li>
            <li>Geo: ${user.address.geo.lat}, ${user.address.geo.lng}</li>
        </ol>
    </li>

    <li>Company:
        <ol>
            <li>Name: ${user.company.name}</li>
            <li>Catch Phrase: ${user.company.catchPhrase}</li>
            <li>BS: ${user.company.bs}</li>
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