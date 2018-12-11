

export class App {
  configureRouter(config, router) {
    this.router = router;
  
    config.map([
      {
        route: ['', 'foos'],
        moduleId: './modules/foos',
        name: 'Foos'
      },

      {
        route: 'home',
        moduleId: './modules/home',
        name: 'Home',
        auth: true
      },

      {
        route: 'foos',
        moduleId: './modules/foos',
        name: 'Foos',
        auth: true
      },

      {
        route: 'helpTickets',
        moduleId: './modules/helpTickets',
        name: 'HelpTickets',
        auth: true
      }
    ])
  }
}