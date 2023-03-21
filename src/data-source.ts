import "reflect-metadata"
import { DataSource } from "typeorm"
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME, MODE } from "./config"
import { User } from "./entity/User"

const entities = [User]
let AppDataSource: DataSource

console.log('Mode : ' + MODE)

if (MODE === 'test') {
    AppDataSource = new DataSource({
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        logging: false,
        entities: entities,
    })
} else {
    console.log(MODE)
    AppDataSource = new DataSource({
        type: "mysql",
        host: DB_HOST,
        port: parseInt(DB_PORT),
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_NAME,
        synchronize: true,
        logging: true,
        entities: entities,
        subscribers: [],
        migrations: [],
    })
}

export default AppDataSource.initialize().then((app) => {
    return app
})