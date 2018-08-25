#![feature(use_extern_macros)]
extern crate wasm_bindgen;
#[macro_use]
extern crate lazy_static;

pub mod browser_rust_interface;
pub mod receiver;
pub mod sender;
pub mod game;
