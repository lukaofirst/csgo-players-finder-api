// Init PlayerFinder;
const playersProfile = new PlayerFinder;

// Init UI
const ui = new UI;

// DOM Elements
const searchPlayer = document.getElementById('input-name');

// Searching Players using Keyup Event 
searchPlayer.addEventListener('keyup', (e) => {
    
    const playerText = e.target.value.toUpperCase();

    playersProfile.getProfile(`./json/playersFaze.json`)
        .then(players => {
            players.forEach((player) => {
                if(playerText === player.nickname.toUpperCase() || playerText === player.name.toUpperCase()) {
                    ui.showProfile(player);
                }
            });         
        },
        
        ui.clearFields()
        
        );

    playersProfile.getProfile(`./json/playersLiquid.json`)
        .then(players => {
            players.forEach((player) => {
                if(playerText === player.nickname.toUpperCase() || playerText === player.name.toUpperCase()) {
                    ui.showProfile(player);
                }
            });         
        },
        
        ui.clearFields()
        
        );

    playersProfile.getProfile(`./json/playersFuria.json`)
        .then(players => {
            players.forEach((player) => {
                if(playerText === player.nickname.toUpperCase() || playerText === player.name.toUpperCase()) {
                    ui.showProfile(player);
                }
            });         
        },
        
        ui.clearFields()
        
        );

    playersProfile.getProfile(`./json/playersAstralis.json`)
        .then(players => {
            players.forEach((player) => {
                if(playerText === player.nickname.toUpperCase() || playerText === player.name.toUpperCase()) {
                    ui.showProfile(player);
                }
            });         
        },
        
        ui.clearFields()
        
        );

    playersProfile.getProfile(`./json/playersNavi.json`)
        .then(players => {
            players.forEach((player) => {
                if(playerText === player.nickname.toUpperCase() || playerText === player.name.toUpperCase()) {
                    ui.showProfile(player);
                }
            });         
        },
        
        ui.clearFields()
        
        );

});