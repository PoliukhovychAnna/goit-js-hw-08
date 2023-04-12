import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// const player = new Player('vimeo-player', {
//   id: 'vimeo-player',
//   src: 'https://player.vimeo.com/video/236203659',
//   width: 640,
//   height: 360,
//   frameborder: '0',
//   allow: 'autoplay; encrypted-media',
// });
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';
let parsedTime = JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) ?? 0;


// player.on('play', );

player.on('timeupdate', throttle((data) => {
   localStorage.setItem(CURRENT_TIME, JSON.stringify(data))
}, 1000));


player
  .setCurrentTime(parsedTime)
  .then(function (data) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

