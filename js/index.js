const rust = import('./rust/katatema.js')

rust
  .then(rust => {
    console.log(rust);
    console.log(rust.add_one(3));
  });