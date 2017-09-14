import angular from 'angular';
import './video-info.css';
const template =  require('./video-info.html');

export const videoInfoComponent = {
    template,
    bindings: {
        video: '<'
    },
};