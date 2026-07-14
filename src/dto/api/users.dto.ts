export class UserModelDto {
  id!: string;
  email!: string;
  fullName!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor(partial: Partial<UserModelDto>) {
    Object.assign(this, partial);
  }
}

export type UserModel = UserModelDto;
