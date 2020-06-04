let turn = 0;
const game = [[0, 3]]

let playerHold = []


const playGameButton = document.querySelector("#playGame")
const textArea = document.getElementById("textArea")
playGameButton.addEventListener("click",playGameSound)


function playGameSound () {
    let count = game[turn].length
    for(let i = 0; i < game[turn].length; i++) {
        setTimeout(() => {
            const key = document.querySelector(`div[data-key="${game[turn][i]}"]`)
            const sound = document.querySelector(`audio[data-sound="${game[turn][i]}"]`)
            if (sound) {
                key.classList.add("playSound")
                setTimeout(() => {
                    key.classList.remove("playSound")
                },600)
                sound.currentTime = 0;
                sound.play()
            }
            count--
            if (count === 0) {
                textArea.style.color = "rgb(185, 8, 8)";
                playGameButton.style.visibility = "hidden";
            }
        }, 800 * i + 1)
    }
    let nextArr = game[turn].slice(0)
    nextArr.push(Math.floor(Math.random() * 6))
    game.push(nextArr)
    turn++
}

const blocks = document.querySelectorAll(".blocks")
const replay = document.getElementById("replay")



replay.addEventListener("click", replayClickHandler)

blocks.forEach((each) => {
  each.addEventListener("click", clickHandler)   
})

function clickHandler (e) {
    if (playGameButton.style.visibility === "hidden") {
        const sound = document.querySelector(`audio[data-sound="${e.target.dataset.key}"]`)
        e.target.classList.add("playSound")
        playerHold.push(e.target.dataset.key * 1)
        if (!checkWinOrLose()) {
            blocks.forEach((each) => {
                each.classList.add("end")
                replay.style.visibility = "unset";
                textArea.innerText = "Game Over"
                textArea.style.color = "rgb(185, 8, 8)";
            })
        }  else {
            if(playerHold.length === game[turn - 1].length) {
                playGameButton.style.visibility = "unset";
                textArea.style.color = "transparent";
                playerHold = []
            }
        }

        if (sound) {
            sound.currentTime = 0;
            sound.play()
        }
        setTimeout(() => {
            e.target.classList.remove("playSound")
        }, 600)
    }
}


function checkWinOrLose () {
    let gameArr = JSON.stringify(game[turn - 1]);
    let playerArr = JSON.stringify(playerHold);
    if(gameArr.length === playerArr.length) {
        return gameArr === playerArr
    } else {
        let a = 0
        while (a < playerHold.length) {
            if (game[turn - 1][a] !== playerHold[a] )  {
                return false;
            } 
            a++
        }
        return true
    }
}


function replayClickHandler () {
    turn = 0 
    playerHold = []
    textArea.innerText = "It's your Turn!!";
    textArea.style.color = "transparent";
    playGameButton.style.visibility = "unset";
    blocks.forEach((each) => {
        each.classList.remove("end")
    })
    replay.style.visibility = "hidden";
}