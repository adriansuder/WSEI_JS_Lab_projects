let ctx
let canvaWidth = window.innerWidth
let canvaHeight = window.innerHeight
let x=Math.floor(Math.random() * canvaWidth-20)//entity1.x
let y=Math.floor(Math.random() * canvaHeight-20)//entity1.y
let xHole = 150 //entity2.x
let yHole = 300//entity2.y
let dx = -2
let dy = -2
let timeStart, timeEnd, result
let playing = false

document.querySelector('#start').addEventListener('click',initGame)
function initGame(){
    ctx = canva.getContext('2d')
    ctx.canvas.width = canvaWidth
    ctx.canvas.height = canvaHeight
    setInterval(moveBall,10)
    setInterval(randomMovement,1000)
    timeStart = Date.now()
    playing = true
}
//sprawdzanie kolizji
function checkCollision(entity1x,entity1y,entity2x,entity2y) {
    if(!(entity1x + 10 < entity2x ||
             entity2x + 20 < entity1x ||
             entity1y + 10 < entity2y ||
             entity2y + 20 < entity1y)==true){
                result=(Date.now()-timeStart)/1000
                if(!alert('Wygrałeś! Twój czas wyniósł: '+result)){window.location.reload();}
             }
  }

//dodanie dołka, poruszanie go i odbijanie od scian
function addHoles(){
    ctx.beginPath()
    ctx.fillStyle="#FFF"
    ctx.arc(xHole,yHole,20,0,Math.PI*2,true)
    ctx.closePath()
    ctx.fill()
        //odbijanie od scian
    if(xHole + dx > canva.width-20 || xHole + dx < 20){
        dx = -dx
    }
    if(yHole + dy > canva.height-20 || yHole + dy < 20){
        dy = -dy
    }    
    xHole += dx;
    yHole += dy;
}
function randomMovement(){
    dx=Math.floor(Math.random() * 6)-5
    dy=Math.floor(Math.random() * 6)-5
    console.log(dx,dy)

}
//poruszanie kulka, czyszczenie, aby nie zostawal slad za kulka
function moveBall(){
    ctx.clearRect(0,0, canvaWidth,canvaHeight)
    ctx.beginPath()
    ctx.fillStyle="#0000ff"
    ctx.arc(x,y,10,0,Math.PI*2,true) 
    ctx.closePath()
    ctx.fill()
    addHoles()
    checkCollision(x,y,xHole,yHole)
    if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function(ev) {
        let h = document.documentElement.clientHeight
        let w = document.documentElement.clientWidth
        let acc = ev.accelerationIncludingGravity
        X=acc.x
        Y=acc.y
        X=0-X
        X=X+10
        Y=Y+10
        X*=50
        Y*=50
        X=(X*w)/1000
        Y=(Y*h)/1000
        let hY = Y
        let hX = X
        x = hX
        y= hY
    }, false)
}
}