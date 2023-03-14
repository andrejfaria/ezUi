import 'reflect-metadata';
import { config } from 'dotenv';
config();

import { server } from './app';

server.startServer()