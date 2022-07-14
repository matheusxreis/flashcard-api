"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./shared/container/index");
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const init_1 = require("./db/init");
(0, dotenv_1.config)();
const api = (0, express_1.default)();
api.use(express_1.default.json());
api.use((0, cors_1.default)({ origin: "*" }));
api.use(routes_1.router);
init_1.Database.init();
api.listen(process.env.PORT, () => console.log(`Running on port: ${process.env.PORT}`));
