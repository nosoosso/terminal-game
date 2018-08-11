pub fn game() {
    loop {
        poll_input();
        calc_next();
        render();

        break;
    }
}

fn poll_input() {}

fn calc_next() {}

fn render() {}