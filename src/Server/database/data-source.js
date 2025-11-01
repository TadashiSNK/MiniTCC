import "reflect-metadata"
import { DataSource } from "typeorm"
import users from "../entities/users.js"

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    username: "root",
    port: 3306,
    password: "",
    database: "miniTCC",
    // synchronize: true,
    entities: [users],       
    migrations: ["./src/Server/database/migrations/*cjs"],
})

export {AppDataSource}