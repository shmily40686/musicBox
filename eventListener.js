window.addEventListener('keydown', (e) => {
    if(page === "piano") {
        if (!pressedKey.has(e.keyCode)) playSoundByKey(e)
        pressedKey.add(e.keyCode)
    }
});
window.addEventListener('keyup', (e) => {
    if (page === "piano") {
        removeKeyClass(e)
        pressedKey.delete(e.keyCode)
    }
});







