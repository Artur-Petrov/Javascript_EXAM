let wrapperDiv = document.getElementById('wrapper');

// receiving users from api

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {

    for (const user of users) {
        //creating the container with user info
        let usersDiv = document.createElement('div');
        usersDiv.classList.add('users-list');

        usersDiv.innerHTML = `
        <h2>${user.id}</h2>
        <h3>${user.name}</h3>
        `;

        let userDetailsHtmlLink = document.createElement('a');
        userDetailsHtmlLink.classList.add('details-btn');
        userDetailsHtmlLink.innerText = 'More Info';
        // adding url to user-details.html
        userDetailsHtmlLink.href = `user-details.html?id=${user.id}`;

        usersDiv.appendChild(userDetailsHtmlLink);
        wrapperDiv.appendChild(usersDiv);
    }
});
