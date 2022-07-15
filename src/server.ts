import "reflect-metadata";
import "./shared/container/index";
import express from "express";
import { config as startEnvVariable} from "dotenv";
import cors from 'cors';
import { router } from "./routes";
import { Database } from "./db/init";

startEnvVariable()
const api = express();


const PORT = () => {
    if(process.env.NODE_ENV==="development") { return 3333 };
    if(process.env.NODE_ENV==="production") { return process.env.PORT || 3333}
};

api.use(express.json());
api.use(cors({origin:"*"}))
api.use(router);

Database.init();
api.listen(PORT(), ()=>console.log(`Running on port: ${PORT()}`));

