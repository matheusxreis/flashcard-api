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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const User_1 = require("../../entities/User");
const encrypt_1 = require("../../utils/encrypt");
const jwt_1 = require("../../utils/jwt");
class AuthRepository {
    signIn(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.UserModel.findOne({ username: data.username }).exec();
            if (!user) {
                throw new Error("Password or username is wrong.");
            }
            if (user.password) {
                const passwordIsRight = yield (0, encrypt_1.Compare)(user.password, data.password);
                if (!passwordIsRight)
                    throw new Error("Password or username is wrong.");
                const token = yield (0, jwt_1.GenerateJWT)(String(user._id));
                const userData = {
                    username: String(user.username),
                    id: String(user._id)
                };
                return {
                    timestamp: new Date().getTime(),
                    user: userData,
                    token
                };
            }
            else {
                throw new Error("Password or username is wrong.");
            }
        });
    }
    signUp(data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("ooi, repository", data);
            const user = new User_1.UserModel(data);
            console.log(user);
            try {
                yield user.save();
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    getUserData(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.findById(id);
            if (user) {
                const userData = new User_1.User(user === null || user === void 0 ? void 0 : user.username, String(user === null || user === void 0 ? void 0 : user.id), user === null || user === void 0 ? void 0 : user.createdAt);
                return userData;
            }
            else {
                throw new Error("User doesn't exist!");
            }
        });
    }
    findByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.UserModel.findOne({ username: username }).exec();
            if ((user === null || user === void 0 ? void 0 : user.username) && (user === null || user === void 0 ? void 0 : user.createdAt)) {
                const userExist = new User_1.User(user.username, String(user._id), user.createdAt);
                return userExist;
            }
            return null;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.UserModel.findById(id);
                if ((user === null || user === void 0 ? void 0 : user.username) && (user === null || user === void 0 ? void 0 : user.createdAt)) {
                    const userExist = new User_1.User(user.username, String(user._id), user.createdAt);
                    return userExist;
                }
                return null;
            }
            catch (_a) {
                return null;
            }
        });
    }
}
exports.AuthRepository = AuthRepository;
