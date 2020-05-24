const pianoKey = document.querySelectorAll(".piano")
const pressedKey = new Set()


function playSoundByClick (e) {
    const audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`) 
    audio.currentTime = 0;
    audio.play()
}


function playSoundByKey (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) 
    const key = document.querySelector(`li[data-key="${e.keyCode}"]`)
    key.innerText = "";
    if (audio){
        key.classList.add("active")
        audio.currentTime = 0;
        audio.play()
    }
}

function removeKeyClass(e) {
    const key = document.querySelector(`li[data-key="${e.keyCode}"]`)
    key.innerText = key.dataset.text;
    if(key) key.classList.remove("active")
}

pianoKey.forEach((key) => {
    key.addEventListener("click", playSoundByClick)
})

