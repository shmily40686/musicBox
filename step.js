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
    if(sequencer.length < 8) {
        const audio = document.querySelector(`audio[data-sound="${tag}"]`)
        const key = document.querySelector(`div[data-sound="${tag}"]`)
        if (audio && key) {
            if (key.classList.value.includes("active")) {
                key.classList.remove("active")
            } else {
                audio.currentTime = 0;
                audio.play()
                key.classList.add("active")
            }
        }
    }
}