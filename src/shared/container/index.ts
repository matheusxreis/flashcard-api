import { container } from "tsyringe";
import { IAuthRepository } from "../../modules/auth/repositories/IAuthRepository";
import { AuthRepository } from "../../modules/auth/repositories/implementation/AuthRepository";
import { SignUpUseCase } from "../../modules/auth/useCases/SignUpUseCase";



container.registerSingleton("SignUpUseCase", SignUpUseCase);
container.registerSingleton<IAuthRepository>("AuthRepository", AuthRepository)