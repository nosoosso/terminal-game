
use sender::RustMsg;

lazy_static! {
    static ref GAME_DATA: Mutex<Game> = Mutex::new(init_game());
}

pub struct Player {
    hp: i32,
}

pub struct Game {
    //    scene: String,
    player: Player,
}

pub fn init_game() -> Game {
    Game {
        player: Player {
            hp: 100,
        }
    }
}

pub fn calc_next() -> RustMsg {
//    RustMsg::NewText(GAME_DATA.player.hp.to_string())
}
