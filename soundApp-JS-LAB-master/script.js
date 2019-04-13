document.addEventListener('DOMContentLoaded', appStart)

  
const sounds = {
113: 'boom', //q
119: 'clap',
101: 'hihat',
97: 'kick', //a
115: 'openhat',
100: 'ride',
122: 'snare',//z
120: 'tink',
99: 'tom',

49: 'a1', //1
50: 'b1',
51: 'c1',
52: 'd1',
53: 'e1',
54: 'f1',
55: 'f1s',
56: 'e1',
57: 'e1s' //9

}
//tablice do zapisu nagrań jako 4 kanały
const chanel1 = []
const chanel2 = []
const chanel3 = []
const chanel4 = []
let isRecording1 = false
let isRecording2 = false
let isRecording3 = false
let isRecording4 = false
let recStart = 0
//nagrywanie każdego z kanałów
function recAudio1(e){
    recStart = Date.now()
    isRecording1 = !isRecording1
    e.target.innerHTML = isRecording1 ? "Stop" : "Rec Ch1"
}
function recAudio2(e){
    recStart = Date.now()
    isRecording2 = !isRecording2
    e.target.innerHTML = isRecording2 ? "Stop" : "Rec Ch2"
}
function recAudio3(e){
    recStart = Date.now()
    isRecording3 = !isRecording3
    e.target.innerHTML = isRecording3 ? "Stop" : "Rec Ch3"
}
function recAudio4(e){
    recStart = Date.now()
    isRecording4 = !isRecording4
    e.target.innerHTML = isRecording4 ? "Stop" : "Rec Ch4"
}
//główna funkcja, event listenery
function appStart(){
    window.addEventListener('keypress',playSound)
    document.querySelector('#rec').addEventListener('click', recAudio1)
    document.querySelector('#rec1').addEventListener('click', recAudio2)
    document.querySelector('#rec2').addEventListener('click', recAudio3)
    document.querySelector('#rec3').addEventListener('click', recAudio4)
    document.querySelector('#play').addEventListener('click', playAudio)
    document.querySelector('#play1').addEventListener('click', playAudio1)
    document.querySelector('#play2').addEventListener('click', playAudio2)
    document.querySelector('#play3').addEventListener('click', playAudio3)
    document.querySelector('#playAllCh').addEventListener('click', playAudioAll)
}
//odtwarzanie dzwieku po kliknieciu danego przycisku, jezeli aktywny jest button rec, wtedy pushujemy do tablicy danego kanału nazwe dzwieku i czas trwania
function playSound(e){
    if(!sounds[e.charCode]){
        return
    }
    const soundName = sounds[e.charCode]
    audioDom = document.querySelector(`#${soundName}`)
    audioDom.currentTime = 0
    audioDom.play()
    if(isRecording1){
        chanel1.push({
            name: soundName,
            time: Date.now()-recStart
        })
    }
    if(isRecording2){
        chanel2.push({
            name: soundName,
            time: Date.now()-recStart
        })
    }
    if(isRecording3){
        chanel3.push({
            name: soundName,
            time: Date.now()-recStart
        })
    }
    if(isRecording4){
        chanel4.push({
            name: soundName,
            time: Date.now()-recStart
        })
    }
}
//odtwarzanie jednego lub wszystkich kanałów
function playAudio(){
    chanel1.forEach(sound =>{
        setTimeout(
            ()=>{
                const audioDOM = document.querySelector(`#${sound.name}`)
                audioDOM.currentTime = 0
                audioDOM.play()
            }, sound.time
        )
    })
}
function playAudio1(){
    chanel2.forEach(sound =>{
        setTimeout(
            ()=>{
                const audioDOM = document.querySelector(`#${sound.name}`)
                audioDOM.currentTime = 0
                audioDOM.play()
            }, sound.time
        )
    })
}
function playAudio2(){
    chanel3.forEach(sound =>{
        setTimeout(
            ()=>{
                const audioDOM = document.querySelector(`#${sound.name}`)
                audioDOM.currentTime = 0
                audioDOM.play()
            }, sound.time
        )
    })
}
function playAudio3(){
    chanel4.forEach(sound =>{
        setTimeout(
            ()=>{
                const audioDOM = document.querySelector(`#${sound.name}`)
                audioDOM.currentTime = 0
                audioDOM.play()
            }, sound.time
        )
    })
}
function playAudioAll(){
    chanel1.forEach(sound =>{
        setTimeout(
            ()=>{
                const audioDOM = document.querySelector(`#${sound.name}`)
                audioDOM.currentTime = 0
                audioDOM.play()
            }, sound.time
        )
    })
    chanel2.forEach(sound =>{
        setTimeout(
            ()=>{
                const audioDOM = document.querySelector(`#${sound.name}`)
                audioDOM.currentTime = 0
                audioDOM.play()
            }, sound.time
        )
    })
    chanel3.forEach(sound =>{
        setTimeout(
            ()=>{
                const audioDOM = document.querySelector(`#${sound.name}`)
                audioDOM.currentTime = 0
                audioDOM.play()
            }, sound.time
        )
    })
    chanel4.forEach(sound =>{
        setTimeout(
            ()=>{
                const audioDOM = document.querySelector(`#${sound.name}`)
                audioDOM.currentTime = 0
                audioDOM.play()
            }, sound.time
        )
    })
}
//funkcja podmieniajaca divy na zasadzie 2 kart
function openTab(evt, instrument) {
    let i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("instrumenty");
    for (i = 0; i < tabcontent.length; i++) {
      //tabcontent[i].style.visibility = "hidden";
      tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(instrument).style.display = "grid";
    evt.currentTarget.className += " active";

}









