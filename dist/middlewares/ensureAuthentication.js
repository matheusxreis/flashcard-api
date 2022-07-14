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
exports.ensureAuthentication = void 0;
const AuthRepository_1 = require("../modules/auth/repositories/implementation/AuthRepository");
const jwt_1 = require("../modules/auth/utils/jwt");
function ensureAuthentication(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authRepository = new AuthRepository_1.AuthRepository();
        const bearerToken = req.headers.authorization;
        if (!bearerToken) {
            return res.status(401).json({ error: "Not authorized" });
        }
        const jwt = yield (0, jwt_1.VerifyJWT)(bearerToken);
        if (!jwt.isRight) {
            return res.status(401).json({ error: "Not authorized" });
        }
        const user = yield authRepository.findById(jwt.sub);
        if (!user) {
            return res.status(401).json({ error: "Not authorized" });
        }
        req.userId = user.id;
        next();
    });
}
exports.ensureAuthentication = ensureAuthentication;
