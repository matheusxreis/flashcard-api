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
exports.Database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class Database {
    static init() {
        return __awaiter(this, void 0, void 0, function* () {
            mongoose_1.default.connect(`mongodb://${process.env.MONGO_DB_SERVER}/${process.env.DATABASE_NAME}`)
                .then(() => console.log("[DATABASE] - Connected!" + `mongodb://${process.env.MONGO_DB_SERVER}/${process.env.DATABASE_NAME}`))
                .catch((err) => { throw new Error(err); });
        });
    }
}
exports.Database = Database;
