player1name = localStorage.getItem("Player_1");
player2name = localStorage.getItem("Player_2");

player1score = 0;
player2score = 0;

document.getElementById("player1nm").innerHTML = player1name + ":";
document.getElementById("player2nm").innerHTML = player2name + ":";
document.getElementById("p1score").innerHTML = player1score;
document.getElementById("p2score").innerHTML = player2score;
document.getElementById("questionplayer").innerHTML = "Question turn-" + player1name;
document.getElementById("answerplayer").innerHTML = "Answer turn-" + player2name;

function send() {
    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;
    tvalue = parseInt(num1) * parseInt(num2);
    console.log(tvalue);
    
    quest = "<h4> Q." + num1 + " X " + num2;
    inputbox = "<input type='text' placeholder= 'Enter your answer' id= input_box>";
    checkb = "<button type= 'button' class= 'btn btn-success' onclick= 'check();'>Check Answer</button>";
    row= quest + inputbox + checkb;
    document.getElementById("output").innerHTML = row;
    
    document.getElementById("number1").innerHTML = "";
    document.getElementById("number2").innerHTML = "";
}
question_turn = "player1";
answer_turn = "player2";
function check(){
    get_answer = document.getElementById("input_box").value;
    answer = get_answer.toLowerCase;
    console.log(answer);
    
    if(answer == tvalue){
        if (answer_turn == "player1"){
            player1score = player1score + 1;
            console.log(player1score);
            document.getElementById("p1score").innerHTML = player1score;
        }
        if (answer_turn == "player2"){
            player2score = player2score + 1;
            console.log(player2score);
            document.getElementById("p2score").innerHTML = player2score;
        }
    }
    if (question_turn == "player1"){
        question_turn = "player2"
        console.log(question_turn);
        document.getElementById("questionplayer").innerHTML = "Question turn-" + player2name;
    }
    else{
        question_turn = "player1"
        console.log(question_turn);
        document.getElementById("questionplayer").innerHTML = "Question turn-" + player1name;
    }
}