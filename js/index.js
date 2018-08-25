const rust = import('./rust/katatema.js')

const gameLoop = rust => tFrame => {
  window.requestAnimationFrame(gameLoop(rust))

  rust.update()
};

rust
  .then(rust => {
    window.document.onkeydown = (ev => {
      rust.send_browser_key_event(ev.key)
    });

    rust.init();
    gameLoop(rust)();
  })
  .catch(err => {
    console.error(err)
  });
