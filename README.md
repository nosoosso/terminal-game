# Setup

```sh
rustup update
rustup install nightly
rustup target add wasm32-unknown-unknown --toolchain nightly
cargo +nightly install wasm-bindgen-cli

npm install
npm run build 
npm run serve
```
