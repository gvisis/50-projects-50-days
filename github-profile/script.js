const APIURL = "https://api.github.com/users/";

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUser(username) {
  // for every async we need await.
  // destructured json
  try {
    const { data } = await axios(APIURL + username);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard('No user found')
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + '/repos');
    addReposToCard(data)
  } catch (err) {
    createErrorCard('Problem fetching repos')
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
                    </div>
                  </div>
                </div > `
  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos');

  repos
    //will show only 10 repos
    .slice(0, 10)
    .forEach(repo => {
      // for each repo we create a link
      // would be easer to generate html as well.. ?
      const repoEl = document.createElement('a')
      repoEl.classList.add('repo');

      // repository object
      repoEl.href = repo.html_url;

      repoEl.target = '_blank';
      repoEl.innerText = repo.name;

      reposEl.appendChild(repoEl);
    })
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