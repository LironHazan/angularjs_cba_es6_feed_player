import angular from 'angular';
const template =  require('./feeds-navbar.html');

export const feedsNavbarComponent = {
    template,
    bindings: {
        sources: '<',
        onSourceSelected: '&'
    },
    controller: class feedsNavbarComponent {
      // notify parent of the selected source
      getSource(selectedSource) {
        this.onSourceSelected({selectedSource});
      }
    },
};