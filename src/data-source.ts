import "reflect-metadata"
import { DataSource } from "typeorm"
import { MODE } from "./config"
import { Task } from "./entity/Task"

const entities = [Task]
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
        host: "localhost",
        port: 3306,
        username: "root",
        password: "farhan123",
        database: "simple-express",
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