import { connect, connection } from 'mongoose';
import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema/schema';



export class App {
  private serverApp: Application = express();
  private MONGO_URI = process.env.MONGO_URI!;
  private APP_NAME = process.env.APP_NAME;
  private PORT = process.env.PORT ?? 5001;

  constructor() {
    this.configServer()

  }
  public startServer = () => {
    console.log('Starting server...');
    this.connectionDatabase(this.listen);


  }

  private configServer = () => {
    this.serverApp.use(express.json());
    this.serverApp.use(express.urlencoded({ extended: true }));
    this.serverApp.use('/api/static', express.static('public'));
    this.serverApp.use(cors());
    this.serverApp.use(morgan('dev'));
    this.serverApp.use(
      '/graphql',
      graphqlHTTP(
        {
          schema,
          graphiql: process.env.NODE_ENV === 'development',
        }
      ))
  };

  private connectionDatabase = (next: () => void) => {
    connect(this.MONGO_URI)
    connection.on('connected', () => {
      console.log('connected to ceiia_db database');
      next();
    })
  }

  public listen = () => {
    this.serverApp.listen(this.PORT, () => {
      console.log(`${this.APP_NAME} is running on port ${this.PORT}`);
    })

  }
}

export const server = new App()