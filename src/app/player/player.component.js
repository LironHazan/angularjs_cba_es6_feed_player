import angular from 'angular';
import _ from 'lodash';
const template =  require('./player.html');

export const playerComponent = {
    template,
    bindings: {
        resources: '<'
    },
    controller: class playerComponent {
    constructor() {
     'ngInject';
    }

      $onChanges(changedObj) {
        if (_.get(changedObj, 'resources.currentValue')) {
           this.videos = changedObj.resources.currentValue;
         }
      }
    },
};