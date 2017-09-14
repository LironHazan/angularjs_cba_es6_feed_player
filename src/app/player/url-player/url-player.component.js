import './url-player.css';
const template =  require('./url-player.html');

export const urlPlayerComponent = {
    template,
    bindings: {
        videoUrl: '<'
    }
};