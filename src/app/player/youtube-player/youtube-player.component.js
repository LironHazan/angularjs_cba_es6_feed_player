import angular from 'angular';
import {conf} from '../../conf'
import './youtube-player.css';
const template =  require('./youtube-player.html');

export const youtubePlayerComponent = {
    template,
    bindings: {
        videoId: '<'
    },
    controller: class youtubePlayerComponent {
    constructor($sce) {
      'ngInject';
      this.$sce = $sce;
    }

    $onInit() {
      this.url = this.$sce.trustAsResourceUrl(conf.youtube_player + this.videoId);
     }
    }
};