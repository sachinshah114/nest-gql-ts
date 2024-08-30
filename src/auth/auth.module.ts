import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: 'THIS_IS_MY_TEST_SECERT_KEY_114',
      signOptions: { expiresIn: '60' },
    }),
  ],
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}
