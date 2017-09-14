import {conf} from '../../conf'
import './facebook-player.css';
const template =  require('./facebook-player.html');

export const facebookPlayerComponent = {
    template,
    bindings: {
        videoId: '<'
    },
    controller: class facebookPlayerComponent {
    constructor() {
      'ngInject';
    }

    $onInit() {
      this.url = conf.facebook_player + this.videoId + '/';
      console.log(this.url);
     }
    },
};