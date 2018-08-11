enum Key {
    Enter,
}

enum BrowserMsg {
    PressKey(),
}

pub fn handle_receive_key_event(key_str: &str) {
    let key = to_key(key_str);
}

fn to_key(key_str: &str) -> Option<Key> {
    match key_str {
        "Enter" => Some(Key::Enter),
        _ => None,
    }
}
