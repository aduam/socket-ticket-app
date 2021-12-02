const Ticket = require('./ticket');

class TicketList {
  constructor() {
    this.lastNumber = 0;
    this.pendings = [];
    this.assigned = [];
  }

  get nextNumber() {
    this.lastNumber += 1;
    return this.lastNumber;
  }

  get lastThirteen() {
    return this.assigned.slice(0, 13);
  }

  createTicket() {
    const call = this.nextNumber;
    const newTicket = new Ticket(call);
    this.pendings.push(newTicket);
    return newTicket;
  }

  ticketAssign(agent, desk) {
    if (this.pendings.length === 0) {
      return null;
    }

    const nextTicket = this.pendings.shift();
    nextTicket.agent = agent;
    nextTicket.desk = desk;
    this.assigned.unshift(nextTicket);
    return nextTicket;
  }
}

module.exports = TicketList;
