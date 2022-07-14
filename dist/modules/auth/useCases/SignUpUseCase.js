"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.SignUpUseCase = void 0;
const tsyringe_1 = require("tsyringe");
const encrypt_1 = require("../utils/encrypt");
let SignUpUseCase = class SignUpUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!username || username === " ") {
                throw new Error("Username field is empty");
            }
            if (!password || password === " ") {
                throw new Error("Password field is empty");
            }
            const newUser = {
                username,
                password: yield (0, encrypt_1.Encrypt)(password),
                createdAt: new Date().getTime(),
            };
            const userAlreadExist = yield this.repository.findByUsername(username);
            if (userAlreadExist) {
                throw new Error("User already exist.");
            }
            yield this.repository.signUp(newUser);
        });
    }
};
SignUpUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("AuthRepository"))
], SignUpUseCase);
exports.SignUpUseCase = SignUpUseCase;
