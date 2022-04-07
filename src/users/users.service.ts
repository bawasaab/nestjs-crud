import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users = [];
  private user_id = 1;

  async create(createUserDto: CreateUserDto) {
    try {
      const newUser = new User(
        this.user_id++,
        createUserDto.email,
        createUserDto.password,
        createUserDto.role,
      );
      this.users.push(newUser);
      return newUser;
    } catch (ex) {
      throw ex;
    }
  }

  async findAll() {
    try {
      return this.users;
    } catch (ex) {
      throw ex;
    }
  }

  async findOne(id: number) {
    try {
      return this.users.find((usr) => usr.id == id);
    } catch (ex) {
      throw ex;
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const existingUser = this.users.find((usr) => usr.id == id);
      const userIndex = this.users.indexOf(existingUser, 0);
      this.users[userIndex] = updateUserDto;
      return this.users[userIndex];
    } catch (ex) {
      throw ex;
    }
  }

  async remove(id: number) {
    const existingUser = this.users.find((usr) => usr.id == id);
    const userIndex = this.users.indexOf(existingUser, 0);
    this.users.splice(userIndex, 1);
    return id;
  }
}
