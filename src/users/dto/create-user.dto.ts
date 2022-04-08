// enum RoleEnum {
//   'ADMIN',
//   'USER',
// }

export class CreateUserDto {
  id: number;
  email: string;
  password: string;
  // role: RoleEnum;
  role: string;
}
