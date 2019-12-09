import Player from './player.mjs';
import Ball from './ball.mjs';
import Score from './Score.mjs';

const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

const player = new Player(0, canvas.height/2, 20, 100, "blue", ctx)
const enemy = new Player(580, canvas.height/2, 20, 100, "red", ctx)
const ball = new Ball("black", 15, canvas, player, enemy)
const score = new Score(ball, player, enemy, game)


ctx.font = "30px Arial";
ctx.textAlign = "center"
ctx.fillText("Press Enter to Play", canvas.width / 2, canvas.height / 2);


let moveMouse = (event) => {
    let y = event.clientY
    player.move(y)
    player.draw()
}

function canvasDraw(interval){
    ball.clear()
    
    ball.draw()
    ball.move()

    player.draw()
    enemy.draw()

    if (score.check() === "Reset"){
        clearInterval(interval)
        canvas.removeEventListener("mousemove", moveMouse)

        ctx.font = "30px Arial";
        ctx.textAlign = "center"

        if(score.score >= 5){
            ctx.fillText("You Win", canvas.width / 2, canvas.height / 2);
            score.score = 0
        }
        else if(score.enemyScore >= 5){
            ctx.fillText("You Lose. Better Luck next time", canvas.width / 2, canvas.height / 2);
        }

        score.score = 0
        score.enemyScore = 0


        ball.x = canvas.width / 2
        ball.y = canvas.height / 2
        ball.xChange = 1
        ball.yChange = 1
    }
}

function setup() {
    canvas.addEventListener("mousemove", moveMouse);
    
    let interval = setInterval(() => {
        canvasDraw(interval)
    }, 10);
}

document.addEventListener('keydown', (event) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (event.keyCode === 13) {
        setup()
    }
});