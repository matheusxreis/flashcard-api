"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = exports.connection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connection = () => {
    if (process.env.NODE_ENV === "development") {
        return `mongodb://${process.env.MONGO_DB_SERVER}/${process.env.DATABASE_NAME}`;
    }
    if (process.env.NODE_ENV === "production") {
        return `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD_DB}${process.env.URL_DB}`;
    }
};
exports.connection = connection;
class Database {
    static init() {
        return __awaiter(this, void 0, void 0, function* () {
            mongoose_1.default.connect(`${(0, exports.connection)()}`)
                .then(() => console.log("[DATABASE] - Connected!"))
                .catch((err) => { throw new Error(err); });
        });
    }
}
exports.Database = Database;
