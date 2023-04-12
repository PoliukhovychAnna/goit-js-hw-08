import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle((data) => {
   localStorage.setItem(CURRENT_TIME, JSON.stringify(data.seconds));
}, 1000));

const parsedTime = JSON.parse(localStorage.getItem(CURRENT_TIME)) ?? 0;
player
  .setCurrentTime(parsedTime)
  .then(function (data) {
    data.seconds
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log('the time was less than 0 or greater than the video’s duration');
        break;

      default:
        console.log(
          'the time was less than 0 or greater than the video’s duration'
        );
        break;
    }
  });

