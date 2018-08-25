pub struct RustMsg {
    typ: String,
    message: String,
}

impl RustMsg {
    pub fn new_text(message: &str) -> RustMsg {
        RustMsg {
            typ: "newText".to_string(),
            message,
        }
    }
}