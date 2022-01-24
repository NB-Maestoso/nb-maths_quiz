function addPlayer(){
    player1 = document.getElementById("player1name").value;
    player2 = document.getElementById("player2name").value;
    
    localStorage.setItem("Player_1", player1);
    localStorage.setItem("Player_2", player2);
    
    window.location = "maths_game.html"
}