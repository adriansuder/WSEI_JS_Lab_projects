let canva = document.querySelector("#ps")
let ctx = canva.getContext("2d")

const imgSource = "img.jpg"

let img = new Image()
img.src = imgSource
img.addEventListener('load', () =>{
    ctx.drawImage(img, 0, 0, canva.width, canva.height)
})

document.querySelector("#brightnessPlus")
    .addEventListener('click', (e)=> { brightness(10) })

document.querySelector("#brightness-")
    .addEventListener('click', (e)=> { brightness(-10) })
// zmiana jasnosci
function brightness(factor) {
    // get pixels from canvas
    let imgData = ctx.getImageData(0,0,canva.width,canva.height)
    for(let i=0; i<imgData.data.length; i+=4){
        imgData.data[i]   = Math.min(255, imgData.data[i] + factor);
        imgData.data[i+1] = Math.min(255, imgData.data[i+1] + factor);
        imgData.data[i+2] = Math.min(255, imgData.data[i+2] + factor);
    }
    ctx.putImageData(imgData, 0, 0)
}
//zmiana kontrastu
document.querySelector("#contrastPlus")
    .addEventListener('click', (e)=> {contrast(25)})

document.querySelector("#contrast-")
    .addEventListener('click', (e)=> {contrast(-25)})   

function contrast(factor) {
    let imgData = ctx.getImageData(0,0,canva.width,canva.height)
    // let C_MAX_CONTRAST = 255;
    if (factor > 0) {
        for (var i = 0; i < imgData.data.length; i += 4) {
            let C_MAX_CONTRAST = 1
            for(var j=1; j <= 3; j++){
                if(imgData.data[j] > C_MAX_CONTRAST)
                    C_MAX_CONTRAST = imgData.data[j]
            }
        //R G B values. 0-255 
                imgData.data[i] += (255 - imgData.data[i]) * factor / C_MAX_CONTRAST;  //RED
                imgData.data[i + 1] += (255 - imgData.data[i + 1]) * factor / C_MAX_CONTRAST; //GREEN
                imgData.data[i + 2] += (255 - imgData.data[i + 2]) * factor / C_MAX_CONTRAST; //BLUE
        }
    } else if (factor < 0) {
        for (var i = 0; i < imgData.data.length; i += 4) {
        //R G B values. 0-255
        let C_MAX_CONTRAST = 1
            for(var j=1; j <= 3; j++){
                if(imgData.data[j] > C_MAX_CONTRAST)
                    C_MAX_CONTRAST = imgData.data[j]
            } 
            imgData.data[i] += imgData.data[i] * (factor) / C_MAX_CONTRAST;  //RED
            imgData.data[i + 1] += imgData.data[i + 1] * (factor) / C_MAX_CONTRAST; //GREEN
            imgData.data[i + 2] += imgData.data[i + 2] * (factor) / C_MAX_CONTRAST; //BLUE
        }
    }
    ctx.putImageData(imgData, 0, 0)
}
//zmiana nasycenia
document.querySelector("#saturationPlus")
    .addEventListener('click', (e)=> {saturation(1.5)})
    document.querySelector("#saturation-")
    .addEventListener('click', (e)=> {saturation(0.5)})

function saturation(factor){
    let imgData = ctx.getImageData(0,0,canva.width,canva.height)
    
    for(let i=0; i<imgData.data.length; i+=4){
        let gray = imgData.data[i] * 0.3086 + imgData.data[i+1] * 0.6094 + imgData.data[i+2] * 0.0820;
        imgData.data[i]   = Math.round(imgData.data[i] * factor + gray * (1-factor));
        imgData.data[i+1] = Math.round(imgData.data[i+1] * factor + gray * (1-factor));
        imgData.data[i+2] = Math.round(imgData.data[i+2] * factor + gray * (1-factor));
    }
    ctx.putImageData(imgData, 0, 0)
}