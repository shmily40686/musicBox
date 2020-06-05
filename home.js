let page = "home"

const stepInfo = "stepInfo";
const simonInfo = "simonInfo";
const pianoInfo = "pianoInfo";

const homeBackgroundVideo = document.getElementById("homeVideo")
homeBackgroundVideo.playbackRate = 0.6;

const boxes = document.querySelectorAll(".select-box")
boxes.forEach(each => {
    each.addEventListener("click", clickHandler)
    each.addEventListener("mouseenter",addInfo)
    each.addEventListener("mouseleave", removeInfo)
})


function clickHandler (e) {
    let pageToGo = e.currentTarget.dataset.page;
    page = pageToGo;
    const currentBox = document.querySelector(`#${pageToGo}`)
    const home = document.querySelector("#home")
    home.style.display = "none"
    currentBox.style.display = "block"
}


const backHome = document.querySelectorAll(".backHome")
backHome.forEach((each) => {
    each.addEventListener("click", backToHome)
})

function backToHome (e) {
    let pageToGo = e.currentTarget.dataset.page;
    page = "home";
    const currentBox = document.querySelector(`#${pageToGo}`)
    const home = document.querySelector("#home")
    home.style.display = "flex"
    currentBox.style.display = "none";
    clearInterval(id)
    replayClickHandler()
}

const textInfo = document.getElementById("info")

function addInfo (e) {
    if (e.target.dataset.page === "stepSequencer") {
        textInfo.innerText = stepInfo

    } else if (e.target.dataset.page === "simonGame") {
        textInfo.innerText = simonInfo
    } else {
        textInfo.innerText = pianoInfo
    }
    
    textInfo.style.visibility = "unset";

}

function removeInfo() {
    textInfo.style.visibility = "hidden";
}