const sounds = [["boom", "clap", "hihat", "openhat", "ride", "snare", "tink", "tom"],
                ["boom", "clap", "hihat", "openhat", "ride", "snare", "tink", "tom"], 
                ["boom", "clap", "hihat", "openhat", "ride", "snare", "tink", "tom"], 
                ["boom", "clap", "hihat", "openhat", "ride", "snare", "tink", "tom"], 
                ["boom", "clap", "hihat", "openhat", "ride", "snare", "tink", "tom"], 
]

const board = document.getElementById("board")

for(let i = 0; i < sounds.length; i++) {
    const row = document.createElement("div")
    row.classList.add("row")
    for(let j = 0; j < sounds[i].length; j++) {
        const box = document.createElement("div")
        box.dataset.sound = sounds[i][j]
        box.addEventListener("click", () => {
            playStepSound(sounds[i][j])
        })
        box.innerText = sounds[i][j]
        box.classList.add("soundBox")
        row.append(box)
    }
    board.append(row)
}


const sequencer = [];


function playStepSound (tag) {
        const audio = document.querySelector(`audio[data-sound="${tag}"]`)
        const key = document.querySelector(`div[data-sound="${tag}"]`)
        if (audio && key) {
            if (key.classList.value.includes("active")) {
                key.classList.remove("active")
                sequencer.splice(sequencer.indexOf(tag),1)
            } else {
                audio.currentTime = 0;
                audio.play()
                key.classList.add("active")
                sequencer.push(tag)
            }
            renderSequencer()
        }
}


function renderSequencer () {
    const bar = document.getElementById("sequencer-bar")
    bar.innerHTML = ""
    for (let i = 0; i < sequencer.length; i++) {
        const div = document.createElement("div")
        div.innerText = sequencer[i]
        div.dataset.tag = sequencer[i]
        div.classList.add("bar-div")
        div.addEventListener("click",removeFromBar)
        bar.append(div)
    }
}


function removeFromBar (e) {
    const key = document.querySelector(`div[data-sound="${e.target.dataset.tag}"]`)
    sequencer.splice(sequencer.indexOf(e.target.dataset.tag), 1)
    key.classList.remove("active")
    renderSequencer()
}


const playButton = document.querySelector('button[data-mode="play"]')
const pauseButton = document.querySelector('button[data-mode="pause"]')

playButton.addEventListener("click",playSequence)
pauseButton.addEventListener("click", pauseSequence)

let id;
let timeSpeed = 500;
let i = 0

function playSequence () {
    if(sequencer.length > 0) {
        id = setInterval(() => {
            console.log("sequencer",sequencer)
            console.log("index", i)
            let current = sequencer[i]
            const sound = document.querySelector(`audio[data-sound="${current}"]`)
            if (sound) {
                sound.currentTime = 0;
                sound.play()
            }
            if (i >= sequencer.length - 1) {
                i = 0
            } else {
                i++
            }
        }, timeSpeed)
        playButton.style.color = "rgb(185, 8, 8)";
        playButton.disabled = true
        pauseButton.style.color = "white";
        pauseButton.disabled = false;
    }
}

function pauseSequence () {
    clearInterval(id)
    pauseButton.style.color = "rgb(185, 8, 8)";
    pauseButton.disabled = true
    playButton.style.color = "white";
    playButton.disabled = false;
}

const speed = document.getElementById("control")

speed.addEventListener("change", () => {
    const newSpeed = document.getElementById("control")
    console.log("newSpeed", newSpeed.value)
    timeSpeed = newSpeed.value;
    clearInterval(id)
    playSequence()
})