const rust = import("./rust/katatema.js");

const fps = 30;
let now = 0;

const gameLoop = rust => tFrame => {
  let delta = Math.floor(tFrame - now);

  while (delta >= 0) {
    delta -= 1000.0 / fps;
  }

  rust.update();

  window.requestAnimationFrame(gameLoop(rust));
};

rust
  .then(rust => {
    window.document.onkeydown = ev => {
      rust.send_browser_key_event(ev.key);
    };

    rust.init();
    gameLoop(rust)();
  })
  .catch(err => {
    console.error(err);
  });
