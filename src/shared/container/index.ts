import { container } from "tsyringe";
import { IAuthRepository } from "../../modules/auth/repositories/IAuthRepository";
import { AuthRepository } from "../../modules/auth/repositories/implementation/AuthRepository";
import { GetUserDataUseCase } from "../../modules/auth/useCases/GetUserDataUseCase";
import { SignInUseCase } from "../../modules/auth/useCases/SignInUseCase";
import { SignUpUseCase } from "../../modules/auth/useCases/SignUpUseCase";


//auth
container.registerSingleton("SignUpUseCase", SignUpUseCase);
container.registerSingleton("SignInUseCase", SignInUseCase);
container.registerSingleton("GetUserDataUseCase", GetUserDataUseCase);
container.registerSingleton<IAuthRepository>("AuthRepository", AuthRepository);
