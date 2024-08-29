import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { CreateUserInputDTO } from './dto/create-user.dto';
import { EncryptPassword } from 'src/common/encrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserInput: CreateUserInputDTO): Promise<User> {
    //Check Email is unique...
    const isEmailExist = (await this.userModel.findOne({
      email: createUserInput.email,
    })) as User;

    if (isEmailExist && Object.keys(isEmailExist).length > 0) {
      throw new BadRequestException('User email already exists');
    }

    //Now Encrypt user's password...
    createUserInput.password = await EncryptPassword(createUserInput.password);
    const createdUser = new this.userModel(createUserInput);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
