import express from 'express';
import { Connection, ConnectDB } from '../src/ConnectionDB/connection';
import routes from './routes';

const PORT = 5000;
Connection();

const app = express();
app.use(express.json());
app.use(routes);


app.listen(PORT, () => console.log(`Server is Running in http://localhost:${PORT}`));