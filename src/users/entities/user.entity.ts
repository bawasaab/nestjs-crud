// enum RoleEnum {
//   'ADMIN',
//   'USER',
// }

export class UserEntity {
  constructor(
    public id: string,
    public email: string,
    public password: string,
    // public role: RoleEnum,
    public role: string,
  ) {}
}
