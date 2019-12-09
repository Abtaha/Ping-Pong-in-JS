export default class Ball {
    constructor(color, size, canvas, player, enemy){ 
        this.x = canvas.width / 2
        this.y = canvas.height / 2
        this.color = color
        this.size = size
        this.xChange = 1;
        this.yChange = 1;
        this.ctx = canvas.getContext("2d")
        this.canvas = canvas
        this.player = player
        this.enemy = enemy
    }

    move(){
        if(this.x >= this.canvas.width || this.x <= 0){
            this.xChange *= -1
        }

        if(this.y >= this.canvas.height || this.y <= 0){
            this.yChange *= -1
        }

        this.x += this.xChange;
        this.y += this.yChange;

        this.logic()
    }

    changeSpeed(){
        let temp_change = this.xChange
        temp_change *= Math.sign(this.xChange)
        temp_change += 0.1
        temp_change *= Math.sign(this.xChange)
        this.xChange = temp_change

        temp_change = this.yChange
        temp_change *= Math.sign(this.yChange)
        temp_change += 0.1
        temp_change *= Math.sign(this.yChange)
        this.yChange = temp_change
    }

    logic(){
        if(this.x <= ((this.player.x + this.player.width) + 10) && 
        this.y >= this.player.y && this.y <= (this.player.y + this.player.height)){
            this.xChange *= -1
            this.changeSpeed()
        }
        
        if(this.x >= this.enemy.x - 10  && 
        this.y >= this.enemy.y && this.y <= (this.enemy.y + this.enemy.height)){
            this.xChange *= -1
            this.changeSpeed()
        }
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y,this.size, 0, 2*Math.PI);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.stroke();
    }

    clear(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}
