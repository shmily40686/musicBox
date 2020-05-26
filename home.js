let page = "home"

const homeBackgroundVideo = document.getElementById("homeVideo")
homeBackgroundVideo.playbackRate = 0.6;

const boxes = document.querySelectorAll(".select-box")
boxes.forEach(each => {
    each.addEventListener("click", clickHandler)
})

function clickHandler (e) {
    let pageToGo = e.currentTarget.dataset.page;
    page = pageToGo;
    const currentBox = document.querySelector(`#${pageToGo}`)
    const home = document.querySelector("#home")
    home.style.display = "none"
    currentBox.style.display = "block"
}


const backPiano = document.querySelector("#pianoButton")

backPiano.addEventListener("click", backToHome)

function backToHome (e) {
    let pageToGo = e.currentTarget.dataset.page;
    page = "home";
    const currentBox = document.querySelector(`#${pageToGo}`)
    const home = document.querySelector("#home")
    home.style.display = "flex"
    currentBox.style.display = "none"
}