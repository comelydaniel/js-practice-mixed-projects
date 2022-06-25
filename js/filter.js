const postList = document.querySelector('.postlist');
const input = document.getElementById('search');
let output = "";
let posts = [];

getPosts();

input.addEventListener('input', (e) => search(e.target.value));

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            posts = data.slice(0, 10);
              posts.forEach(post => {
                output += `
                <li class="post">
                    <p>${post.id}</p>
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                </li>
                `;
                postList.innerHTML = output;
              })
        });
}

function search(term) {
    posts.forEach(set => {
        console.log(term)
        console.log(set.innerText.includes(term))
       /*if (set.textContent.includes(term)) {
            console.log(set)
            set.classList.remove('hidden');
        } else {
            set.classList.add('hidden');
        }*/
    })
    
}

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            posts = data.slice(0, 10);
              posts.forEach(post => {
                output += `
                <li class="post">
                    <p>${post.id}</p>
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                </li>
                `;
                postList.innerHTML = output;
              })
        });
}