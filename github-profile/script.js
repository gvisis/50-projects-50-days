const APIURL = "https://api.github.com/users/";

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUser(username) {
  // for every async we need await.
  // destructured json
  try {
    const { data } = await axios(APIURL + username);
    console.log(data)
    createUserCard(data)
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard('No user found')
    }
  }
}

function createUserCard(user) {
  const cardHTML = `<div class="card">
                    <div>
                    <img src="${user.avatar_url}" class="avatar" alt="${user.login}">
                  </div>
                  <div class="user-info">
                    <h2>${user.login}</h2>
                    <p>${user.bio}</p>
                    <ul>
                      <li>${user.followers} <strong>Followers</strong></li>
                      <li>${user.following} <strong>Following</strong></li>
                      <li>${user.public_repos} <strong>Repos</strong></li>
                    </ul>
                    <div id="repos">
                      <a href="#" class="repo">Repo 1</a>
                      <a href="#" class="repo">Repo 2</a>
                      <a href="#" class="repo">Repo 3</a>
                    </div>
                  </div>
                </div > `
  main.innerHTML = cardHTML;
}
function createErrorCard(msg) {
  const cardHTML = `
    <div class="card">
      <h1>${msg}</h1>
    </div>
  `
  main.innerHTML = cardHTML;
}
// Gets value from search
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const user = search.value;

  if (user) {
    getUser(user)
    search.value = '';
  }
})