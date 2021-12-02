const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');

const Socket = require('./socket');
const Rest = require('./rest');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 2000;
    this.server = http.createServer(this.app);
    this.io = socketio(this.server, { /* configs */ });
    this.socket = new Socket(this.io);
  }

  middlewares() {
    this.app.use(cors());
  }

  rest() {
    const rest = new Rest(this.app, this.socket.ticketList);
    rest.routes();
  }

  execute() {
    this.middlewares();
    this.socket.socketEvents();
    this.rest();
    this.server.listen(this.port, () => {
      console.log(`server is running on port ${this.port}`);
    });
  }
}

module.exports = Server;