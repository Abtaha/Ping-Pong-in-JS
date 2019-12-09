export default class Player{
    constructor(x, y, width, height, color, ctx) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
        this.ctx = ctx
    }
    
    draw() {
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
        this.ctx.stroke()
    }
    
    move(newY) {
        if (newY <= (500 - 80) && newY >= 0){
            this.ctx.clearRect(this.x, this.y, this.width, this.height);
            this.y = newY
        }
    }
}