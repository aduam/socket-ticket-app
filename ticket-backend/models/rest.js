const TicketList = require('./ticket-list');

class Rest {
  constructor(app, socketList) {
    this.app = app;
    this.ticketList = socketList;
  }

  routes() {
    this.app.get('/', (_, res) => {
      const tickets = this.ticketList.lastThirteen;
      res.status(200).send(tickets)
    });
  }
}

module.exports = Rest;
