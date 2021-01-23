const jokeDOM = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

async function generateJoke() {
  // For cleaner code, we can put headers in a config object
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  //Async/Await method
  // to use await, we need to label the function 'async'
  const res = await fetch("https://icanhazdadjoke.com", config);

  // We get the fetched data as json
  const data = await res.json();

  // And push joke value inside the html
  jokeDOM.innerHTML = data.joke;

  // Fetch method
  // fetch('https://icanhazdadjoke.com', config)
  // .then(res => res.json())
  // .then(data => jokeDOM.innerHTML = data.joke);
}
jokeBtn.addEventListener("click", generateJoke);
