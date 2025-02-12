// import "reflect-metadata";
// import { DataSource } from "typeorm";
// import { User } from "../entities/User";

// export const AppDataSource = new DataSource({
//   type: "mongodb",
//   url: process.env.MONGO_URI, // MongoDB connection URL from .env
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   database: "userdb",
//   entities: [User],
//   synchronize: true, // Auto-create collections (for dev only)
// });



import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306, // Default MySQL port
  username: "root", // Change this if needed
  password: "Rahul@123", // Your MySQL password
  database: "db", // Your MySQL database name
  synchronize: true, // Set to false in production
  logging: true,
  entities: [User],
  driver: require("mysql2"), // Explicitly use mysql2

});
