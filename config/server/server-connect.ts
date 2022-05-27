/* eslint no-console: "off" */
import server from '#config/server/api-config.js';

class Server {
  port: number;

  constructor() {
    const port = this.normalizePort(process.env.SERVER_PORT || '3000');

    server.set('port', port);
    server.on('error', this.onError);

    this.start(port);
  }

  normalizePort(port): Boolean | Number {
    const numberPort = parseInt(port, 10);

    if (numberPort >= 0) {
      return numberPort;
    }

    return false;
  }

  onError(error): void {
    if (error.syscall !== 'listen') {
      throw error;
    }

    const bind =
      typeof this.port === 'string' ? `Pipe ${this.port}` : `Port ${this.port}`;

    switch (error.code) {
      case 'EACCES':
        console.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;

      case 'EADDRINUSE':
        console.error(`${bind} is already in use`);
        process.exit(1);
        break;

      default:
        throw error;
    }
  }

  start(serverPort): void {
    server.listen(serverPort, () => {
      console.info(`Server is running in port ${serverPort}`);
    });
  }
}

export default new Server();
