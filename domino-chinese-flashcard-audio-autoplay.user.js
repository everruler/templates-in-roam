// ==UserScript==
// @name        DominoChinese Flashcard Audio Autoplay
// @namespace   https://eriknewhard.com/
// @description When the flashcard answer is revealed, the audio will play automatically
// @author      everruler12
// @version     1.0
// @match       https://www.dominochinese.com/flashcards
// @grant       none
// ==/UserScript==


var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        const added = mutation.addedNodes[0]
        if (added && added.classList && added.classList.contains('audio-player')) {
            added.click()
        }
    })
})

var target = document.getElementById('root')

var config = {
    childList: true,
    subtree: true
}

observer.observe(target, config)

console.log('DominoChinese Flashcard Audio Autoplay started')
