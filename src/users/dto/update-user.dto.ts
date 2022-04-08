import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

enum RoleEnum {
  'ADMIN',
  'USER',
}

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id: number;
  email: string;
  password: string;
  role: RoleEnum;
  constructor() {
    super();
  }
}
