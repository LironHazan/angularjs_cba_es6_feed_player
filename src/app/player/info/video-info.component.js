import angular from 'angular';
import './video-info.css';
import * as numeral from 'numeral';

const template =  require('./video-info.html');

export const videoInfoComponent = {
    template,
    bindings: {
        video: '<'
    },
    controller: class videoInfoComponent {
        constructor() {
          'ngInject';
        }

        $onInit() {
          this.views = numeral(this.video.views).format('0[.]0[0]a');
         }
        }
};