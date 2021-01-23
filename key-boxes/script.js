const insertDOM = document.querySelector(".insert");

addEventListener("keydown", (event) => {
  insertDOM.innerHTML = `
    <div class="key">
        ${event.key == " " ? "Space" : event.key}
        <small>event.key</small>
      </div>
      <div class="key">
        ${event.code}
        <small>event.code</small>
      </div>`;
});
