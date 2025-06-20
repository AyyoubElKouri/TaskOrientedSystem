import mysql from 'mysql2/promise';

class Database {
    private database: mysql.Pool;
    private isConnected: boolean;

    public constructor() {

        // database connection informations.
        this.database = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: 'hello world',
            database: 'taskssystem',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
        });

        this.isConnected = false;
    }

    public async connect(): Promise<void> {

        if (this.isConnected) {
            return;
        }

        try {
            // Create connection.
            const connection = await this.database.getConnection();
            connection.release();

            console.log('Connected to the database');
            this.   isConnected = true;
        } catch (error) {
            console.error('Error connecting to the database:', error);
        }
    }

    public async disconnect(): Promise<void> {

        if (!this.isConnected) {
            console.log('Not connected to the database');
            return;
        }

        try {
            await this.database.end();
            console.log('Disconnected from the database');
            this.isConnected = false;
        } catch (error) {
            console.error('Error disconnecting from the database:', error);
        }
    }

    public getDatabase(): mysql.Pool {
        return this.database;
    }

    public async executeQuery(query: string, values?: any[]): Promise<any> {
        try {
            const [rows] = await this.database.query(query, values);
            return rows;
        } catch (error) {
            console.error('Error executing query:', error);
            throw error;
        }
    }
}

export default Database;


