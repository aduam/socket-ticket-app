const TicketList = require('./ticket-list');

class Socket {
  constructor(io) {
    this.io = io;
    this.ticketList = new TicketList();
  }

  socketEvents() {
    this.io.on('connection', (socket) => {
      console.log('client is connected');

      socket.emit('tickets', this.ticketList.lastThirteen);

      socket.on('new-ticket', (_, cb) => {
        const newTicket = this.ticketList.createTicket();
        cb(newTicket);
      });

      socket.on('next-ticket', ({ agent, desk }, cb) => {
        const ticketAssign = this.ticketList.ticketAssign(agent, desk);
        cb(ticketAssign);
        this.io.emit('tickets', this.ticketList.lastThirteen);
      })
    });
  }
}

module.exports = Socket;