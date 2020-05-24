let page = "home"

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