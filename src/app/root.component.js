import angular from 'angular';
const template =  require('./root.html');

export const rootComponent = {
    template,
    controller: class rootComponent {
    constructor(rootService) {
      'ngInject';
      this.rootService = rootService;
      }

      //fetching the videos on init and binding to player
      $onInit(){
        this.rootService.fetchFeeds()
        .then(res => {
            this.items = Object.assign({}, res);
            console.log(this.items);
            this.sources = res.reduce((acc, item) => {
              if(acc.indexOf(item.source) === -1) {
                 acc.push(item.source); // getting the source of each video
                 }
              return acc;
              }, []);
        })
      }

      // gets the selectedSource from navbar selector
      filterFeed(selectedSource) {
        console.log('im in filterFeed!');
        this.rootService.filterBySource(selectedSource)
        .then(res => {
         this.items = Object.assign({}, res);; // update this.items which player.component watching
         console.log(this.items);
        });
      }

    },
};