window.addEventListener('keydown', (e) => {
    if(page === "pianoGame") {
        if (!pressedKey.has(e.keyCode)) playSoundByKey(e)
        pressedKey.add(e.keyCode)
    }
});
window.addEventListener('keyup', (e) => {
    if (page === "pianoGame") {
        removeKeyClass(e)
        pressedKey.delete(e.keyCode)
    }
});







