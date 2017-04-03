(function() {
  'use strick';

  vm = this;
  vm.player = document.querySelector('#audioPlayer');

  vm.play = play;
  vm.resume = resume;
  vm.volume = volume;
  vm.update = update;
  vm.formatTime = formatTime;


  //Functions
  function play(idPlayer, control) {
    var player = document.querySelector('#' + idPlayer);

    if (player.paused) {
      player.play();
      control.textContent = 'Pause';
    } else {
      player.pause();
      control.textContent = 'Play';
    }
  }

  function resume(idPlayer) {
    var player = document.querySelector('#' + idPlayer);

    player.currentTime = 0;
    player.pause();
  }

  function volume(idPlayer, vol) {
    var player = document.querySelector('#' + idPlayer);

    player.volume = vol;
  }

  function update(player) {
    var duration = player.duration; // Durée totale
    var time = player.currentTime; // Temps écoulé
    var fraction = time / duration;
    var percent = Math.ceil(fraction * 100);

    var progress = document.querySelector('#progressBar');
    document.querySelector('#progressTime').textContent = formatTime(time);

    progress.style.width = percent + '%';
    progress.textContent = percent + '%';
  }

  function formatTime(time) {
    var hours = Math.floor(time / 3600);
    var mins = Math.floor((time % 3600) / 60);
    var secs = Math.floor(time % 60);

    if (secs < 10) {
      secs = "0" + secs;
    }

    if (hours) {
      if (mins < 10) {
        mins = "0" + mins;
      }

      return hours + ":" + mins + ":" + secs; // hh:mm:ss
    } else {
      return mins + ":" + secs; // mm:ss
    }
  }

})();
