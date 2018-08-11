const rust = import('./rust/katatema.js')


function gameLoop(rust) {
  let quit = false;
  while (!quit) {

    quit = true
  }
}


rust
  .then(rust => {
    console.log(rust)

    window.document.onkeydown = (ev => {
      // console.log(ev.key)
      rust.send_browser_key_event(ev.key)
    });

    gameLoop(rust)
  })
  .catch(err => {
    console.error(err)
  });