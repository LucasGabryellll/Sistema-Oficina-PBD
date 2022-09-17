import { Pool, Client } from 'pg';

export const Connection = () => {
  const connect = new Client({
    user: "postgres",
    host: "localhost",
    database: "oficina_db",
    password: "postgres",
    port: 5432
  });

  return connect;
}

export async function ConnectDB() {
  return await Connection().connect();
}