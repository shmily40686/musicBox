const pianoKey = document.querySelectorAll(".piano")
const pressedKey = new Set()


const backgroundVideo = document.getElementById("pianoVideo")
backgroundVideo.playbackRate = 0.6;

function playSoundByClick (e) {
    const audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`) 
    audio.currentTime = 0;
    audio.play()
}


function playSoundByKey (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) 
    const key = document.querySelector(`li[data-key="${e.keyCode}"]`)
    if(!key) return
    key.innerText = "";
    if (audio){
        key.classList.add("active")
        audio.currentTime = 0;
        audio.play()
    }
}

function removeKeyClass(e) {
    const key = document.querySelector(`li[data-key="${e.keyCode}"]`)
    if(!key) return
    key.innerText = key.dataset.text;
    if(key) key.classList.remove("active")
}

pianoKey.forEach((key) => {
    key.addEventListener("click", playSoundByClick)
})

