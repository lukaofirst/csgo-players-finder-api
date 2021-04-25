// This class will insert the results on HTML Document
class UI {
    constructor() {
        this.playerName = document.querySelector('.profile-wrapper');
    }

    // Method that display the results
    showProfile(player) {
        this.playerName.innerHTML = `
            <div class="profile-single">
                <div class="profile-single-info">
                    <h3>Player Information</h3>
                    <br>
                    <h3>Nickname: <span>${player.nickname}</span></h3>
                    <h3>Name: <span>${player.name}</span></h3>
                    <h3>Age: <span>${player.age} Years</span></h3>
                    <h3>Nationality: <span>${player.nationality}</span></h3>
                    <h3>Team: <span>${player.team}</span></h3>
                    <h3>Role: <span>${player.role}</span></h3>
                    <br>
                    <h3>Major Achievements: <span><i class="fas fa-trophy"></i> ${player.majorWins}</span></h3>
                    <h3>Major MVP: <span><i class="fas fa-medal"></i> ${player.majorMvp}</span></h3>
                </div>
            </div>
        `;
    }
    
    // Clear fields on input
    clearFields() {
        this.playerName.innerHTML = '';
    }
}