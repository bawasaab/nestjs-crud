import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const createdUser = new this.userModel(createUserDto);
      return createdUser.save();
    } catch (ex) {
      throw ex;
    }
  }

  async findAll() {
    try {
      const user = await this.userModel.find().exec();
      if(!user) {
        throw new NotFoundException('Users not found');
      }
      return user;
    } catch (ex) {
      throw ex;
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.userModel.findById(id).exec();
      if(!user) {
        throw new NotFoundException('User not found');
      }
      return user;
    } catch (ex) {
      throw ex;
    }
  }

  async update(id: any, updateUserDto: UpdateUserDto) {
    try {
      const updatedUser = await this.userModel.findById(id).exec();
      if(!updatedUser) {
        throw new NotFoundException('User not found');
      }
      if(updateUserDto.email) {
        updatedUser.email = updateUserDto.email;
      }
      if(updateUserDto.password) {
        updatedUser.password = updateUserDto.password;
      }
      if(updateUserDto.role) {
        updatedUser.role = updateUserDto.role;
      }
      return updatedUser.save();
    } catch (ex) {
      throw ex;
    }
  }

  async remove(id: any) {
    try {
      await this.findOne(id);
      const user = await this.userModel.deleteOne({_id: id}).exec();
      return user;
    } catch (ex) {
      throw ex;
    }
  }
}
