export class UserModelDto {
  id!: string;
  email!: string;
  fullName!: string;
  avatarUrl?: string | null;
  createdAt!: Date;
  updatedAt!: Date;

  constructor(partial: Partial<UserModelDto>) {
    Object.assign(this, partial);
  }
}

export type UserModel = UserModelDto;
