import "reflect-metadata";
import "./shared/container/index";
import express from "express";
import { config as startEnvVariable} from "dotenv";
import cors from 'cors';
import { router } from "./routes";
import { Database } from "./db/init";

startEnvVariable()
const api = express();


api.use(express.json());
api.use(cors({origin:"*"}))
api.use(router);

Database.init();
api.listen(process.env.PORT_API, ()=>console.log(`Running on port: ${process.env.PORT_API}`));

