import {conf} from './conf'
export class rootService {

  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  fetchFeeds() {
    return this.$http.get(conf.api + 'feeds/all')
    .then(res => res.data.items);
  }

  filterBySource(source) {
    return this.$http.get(conf.api + 'feeds/filter', { params: {source}})
    .then(res => res.data);
   }
}