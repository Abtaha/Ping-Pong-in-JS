export default class Score{
    constructor(ball, player, enemy, canvas){
        
        this.score = 0
        this.enemyScore = 0

        this.ball = ball
        this.player = player
        this.enemy = enemy
        
        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d")
    }

    enemyLogic(){
        let center = (this.enemy.height / 2) + this.enemy.y
        
        if (this.ball.y >= center){
            this.enemy.y += (Math.random() * (1 - 0.5) + 0.5)
        }
        
        if (this.ball.y <= center){
            this.enemy.y -= (Math.random() * (1 - 0.5) + 0.5)
        }
    }

    draw(){
        this.ctx.font = "30px Arial";
        this.ctx.textAlign = "center"
        
        this.ctx.fillStyle = "blue"
        this.ctx.fillText("Score: " + this.score, 100, 50);
        
        this.ctx.fillStyle = "red"
        this.ctx.fillText("Enemy Score: " + this.enemyScore, 450, 50);
    }
    
    check(){
        if (this.ball.x >= this.canvas.width){
            this.score += 1
        }

        if (this.ball.x <= 0){
            this.enemyScore += 1
        }

        if (this.score >= 5){
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            return "Reset"
        }

        if (this.enemyScore >= 5){
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            return "Reset"
        }

        this.draw()
        this.enemyLogic()
    }
}