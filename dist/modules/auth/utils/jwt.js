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
exports.VerifyJWT = exports.GenerateJWT = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function GenerateJWT(content) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = (0, jsonwebtoken_1.sign)({}, `${process.env.HASH_JWT}`, {
            subject: content,
            expiresIn: "1d"
        });
        return token;
    });
}
exports.GenerateJWT = GenerateJWT;
function VerifyJWT(bearerToken) {
    return __awaiter(this, void 0, void 0, function* () {
        //Bearar 81hjw17j2k912k21j2182j1kh2
        const [, token] = bearerToken.split(" ");
        try {
            //sub is user id
            const { sub } = yield (0, jsonwebtoken_1.verify)(token, `${process.env.HASH_JWT}`);
            console.log(sub, "JSON WEB TOKEN");
            return {
                isRight: true,
                sub: String(sub)
            };
        }
        catch (err) {
            return {
                isRight: false,
                sub: ""
            };
        }
    });
}
exports.VerifyJWT = VerifyJWT;
