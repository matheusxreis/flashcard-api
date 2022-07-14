"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class User {
    constructor(username, id, createdAt) {
        this.username = username;
        this.id = id;
        this.createdAt = createdAt;
    }
}
exports.User = User;
let userSchema = new mongoose_1.default.Schema({
    username: String,
    password: String,
    createdAt: Number,
});
let UserModel = mongoose_1.default.model("users", userSchema);
exports.UserModel = UserModel;
