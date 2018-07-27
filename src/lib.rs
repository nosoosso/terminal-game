#![feature(use_extern_macros)]
extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[test]
fn it_works() {
    assert_eq!(add_one(2), 3);
}

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub extern fn add_one(a: i32) -> i32 {
    a + 1
}

pub fn alert_add_one(a: i32) -> i32 {
    let b = add_one(a);
    alert(&format!("{} + 1 = {}", a, b));
    b
}
