import {playerComponent} from './player.component';
import {urlPlayerComponent} from './url-player/url-player.component';
import {youtubePlayerComponent} from './youtube-player/youtube-player.component';
import {facebookPlayerComponent} from './facebook-player/facebook-player.component';
import {videoInfoComponent} from './info/video-info.component';
import './player.css';

export const PlayerModule = angular
  .module('player', [])
  .component('player', playerComponent)
  .component('urlPlayer', urlPlayerComponent)
  .component('youtubePlayer', youtubePlayerComponent)
  .component('facebookPlayer', facebookPlayerComponent)
  .component('videoInfo', videoInfoComponent)
  .name;