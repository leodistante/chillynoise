function playAudio(x) {
    var y = x.parentElement.querySelector('audio');
    var z = x.getAttribute('class');

    if (z === 'play') {
        y.play();
        x.setAttribute('class', 'pause');
    } else {
        y.pause();
        x.setAttribute('class', 'play');
    }

    y.onended = function () {
        x.setAttribute('class', 'play');
    }
}