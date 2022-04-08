import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.usersService.create(createUserDto);
    } catch (ex) {
      throw ex;
    }
  }

  @Get()
  async findAll() {
    try {
      const user = await this.usersService.findAll();
      return user;
    } catch (ex) {
      throw ex;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const user = await this.usersService.findOne(id);
      return user;
    } catch (ex) {
      throw ex;
    }
  }

  @Patch(':id')
  async update(@Param('id') id: any, @Body() updateUserDto: UpdateUserDto) {
    try {
      const usr = updateUserDto;
      usr.id = +id;
      return await this.usersService.update(id, usr);
    } catch (ex) {
      throw ex;
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: any) {
    try {
      return await this.usersService.remove(id);
    } catch (ex) {
      throw ex;
    }
  }
}
