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
        <ul>
            <li>Street: ${user.address.street}</li>
            <li>Suite: ${user.address.suite}</li>
            <li>City: ${user.address.city}</li>
            <li>Zipcode: ${user.address.zipcode}</li>
            <li>Geo: ${user.address.geo.lat}, ${user.address.geo.lng}</li>
        </ul>
    </li>

    <li>Company:
        <ul>
            <li>Name: ${user.company.name}</li>
            <li>Catch Phrase: ${user.company.catchPhrase}</li>
            <li>BS: ${user.company.bs}</li>
        </ul>
    </li>
</ul>
    `;
})

