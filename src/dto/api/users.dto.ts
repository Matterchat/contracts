export class UserModelDto {
  id!: string;
  email!: string;
  fullName!: string;
  avatarUrl!: string;
  lastSeen!: Date;
  createdAt!: Date;
  updatedAt!: Date;

  constructor(partial: Partial<UserModelDto>) {
    Object.assign(this, partial);
  }
}

export type UserModel = UserModelDto;
