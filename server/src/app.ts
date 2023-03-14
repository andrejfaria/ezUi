import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';

export class App {
  private serverApp: Application = express();
  private MONGO_URI = process.env.MONGO_URI;
  private APP_NAME = process.env.APP_NAME;
  private PORT = process.env.PORT ?? 5001;

  constructor() {


  }
  public startServer = () => {

  }

  private configServer = () => {
    this.serverApp.use(express.json());
    this.serverApp.use(express.urlencoded({ extended: true }));
    this.serverApp.use('/api/static', express.static('public'));
    this.serverApp.use(cors());
    this.serverApp.use(morgan('dev'));
  };

  private connectionDatabase = () => {

  }

  public listen = () => {
    this.serverApp.listen(this.PORT, () => {
      console.log(`${this.APP_NAME} is running on port ${this.PORT}`);
    })

  }
}

export const server = new App();