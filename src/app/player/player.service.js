export class playerService {

  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

//  checkVideoAvailability(url) {
//    return this.$http.get(url)
//    .then(res => 'ok')
//    .catch(err => err);
//  }

    normalizeViewsNum(views) {
            // Nine Zeroes for Billions
            return Math.abs(Number(views)) >= 1.0e+9

            ? Math.abs(Number(views)) / 1.0e+9 + "B"
            // Six Zeroes for Millions
            : Math.abs(Number(views)) >= 1.0e+6

            ? Math.abs(Number(views)) / 1.0e+6 + "M"
            // Three Zeroes for Thousands
            : Math.abs(Number(views)) >= 1.0e+3

            ? Math.abs(Number(views)) / 1.0e+3 + "K"

            : Math.abs(Number(views));
    }

}