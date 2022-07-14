"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const AuthRepository_1 = require("../../modules/auth/repositories/implementation/AuthRepository");
const GetUserDataUseCase_1 = require("../../modules/auth/useCases/GetUserDataUseCase");
const SignInUseCase_1 = require("../../modules/auth/useCases/SignInUseCase");
const SignUpUseCase_1 = require("../../modules/auth/useCases/SignUpUseCase");
//auth
tsyringe_1.container.registerSingleton("SignUpUseCase", SignUpUseCase_1.SignUpUseCase);
tsyringe_1.container.registerSingleton("SignInUseCase", SignInUseCase_1.SignInUseCase);
tsyringe_1.container.registerSingleton("GetUserDataUseCase", GetUserDataUseCase_1.GetUserDataUseCase);
tsyringe_1.container.registerSingleton("AuthRepository", AuthRepository_1.AuthRepository);
