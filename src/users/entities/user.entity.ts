enum RoleEnum {
  'ADMIN',
  'USER',
}

export class User {
  constructor(
    public id: number,
    public email: string,
    public password: string,
    public role: RoleEnum,
  ) {}
}
