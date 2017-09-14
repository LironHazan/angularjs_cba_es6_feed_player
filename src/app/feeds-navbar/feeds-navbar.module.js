import {feedsNavbarComponent} from './feeds-navbar.component';
import './feeds-navbar.css';

export const feedsNavbarModule = angular
  .module('feedsNavbar', [])
  .component('feedsNavbar', feedsNavbarComponent)
  .name;