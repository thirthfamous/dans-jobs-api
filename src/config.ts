import dotenv from 'dotenv';

dotenv.config();

export const MODE = process.env.mode;
export const DB_HOST = process.env.db_host
export const DB_PORT = process.env.db_port
export const DB_USERNAME = process.env.db_username
export const DB_PASSWORD = process.env.db_password
export const DB_NAME = process.env.db_name
export const SECRET_KEY = process.env.secret_key