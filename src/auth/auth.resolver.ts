import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login-response.dto';
import { LoginInput } from './dto/login-input.dto';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  async login(@Args('input') loginInput: LoginInput): Promise<LoginResponse> {
    const user = await this.authService.validateUser(
      loginInput.email,
      loginInput.password,
    );
    return this.authService.login(user);
  }
}
