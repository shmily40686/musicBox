let turn = 0;
const game = [
    [0, 3],
    [0, 3, 2],
    [0, 3, 2, 4],
    [0, 3, 2, 4, 5],
    [0, 3, 2, 4, 5, 1],
    [0, 3, 2, 4, 5, 1, 6],
    [0, 3, 2, 4, 5, 1, 6,3],
    [0, 3, 2, 4, 5, 1, 6, 3,2],
    [0, 3, 2, 4, 5, 1, 6, 3, 2,5],
    [0, 3, 2, 4, 5, 1, 6, 3, 2, 5,6],
    [0, 3, 2, 4, 5, 1, 6, 3, 2, 5, 6, 0],
    [0, 3, 2, 4, 5, 1, 6, 3, 2, 5, 6, 0, 1],
    [0, 3, 2, 4, 5, 1, 6, 3, 2, 5, 6, 0, 1, 4],
    [0, 3, 2, 4, 5, 1, 6, 3, 2, 5, 6, 0, 1, 4, 5],
]


const playGameButton = document.querySelector("#playGame")
playGameButton.addEventListener("click",playGameSound)


function playGameSound () {
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
        }, 500 * i + 1)
    }
    turn++
}

const blocks = document.querySelectorAll(".blocks");