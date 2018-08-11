#![feature(use_extern_macros)]
extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;
use receiver::handle_receive_key_event;
use game::game;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen(module = "./../js-defined")]
extern {
    fn handle_rust_event(event: &str);
}

#[wasm_bindgen]
pub fn send_browser_key_event(key_str: &str) {
    handle_receive_key_event(key_str);
}

#[wasm_bindgen]
pub fn start() {
    handle_rust_event("Subscribed!");
}
