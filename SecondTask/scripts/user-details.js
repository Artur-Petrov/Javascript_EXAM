// getting users id

const userId = new URL(location.href).searchParams.get('id');

let userDetailsContainer = document.getElementById('user-details');
let postsBtn = document.getElementById('posts-btn');
let postsContainer = document.getElementById('posts-container');