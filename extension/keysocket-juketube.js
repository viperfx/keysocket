var connection = null;
var isConnected = false;

function controlJukeTube(key) {
    if(key === NEXT) {
        var nextButton = document.querySelector('.main .next');
        simulateClick(nextButton);
    } else if(key === PLAY) {
        var isPlaying = document.querySelector('.main .play').style.display === 'none';
        var playPauseButton = null;
        if(isPlaying) {
          playPauseButton = document.querySelector('.main .pause');
        } else {
          playPauseButton = document.querySelector('.main .play');
        }
        simulateClick(playPauseButton);
    } else if(key === PREV) {
        // var backButton = document.getElementById('player_control_next');
        // simulateClick(backButton);
    }
}

reconnect(controlJukeTube, connection, isConnected);
