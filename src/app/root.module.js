import {rootComponent} from './root.component';
import {PlayerModule} from './player/player.module'
import {feedsNavbarModule} from './feeds-navbar/feeds-navbar.module'
import {rootService} from './root.service';
import '../style/root.css';

export const rootModule = angular
  .module('root', [
//   'ui.router', let's keep it there in case of need
    PlayerModule,
    feedsNavbarModule
  ])
  .component('root', rootComponent)
  .service('rootService', rootService)
  .name;