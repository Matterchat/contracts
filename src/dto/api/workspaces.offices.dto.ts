import { IsString, Length } from "class-validator";

export class CreateWorkspaceOfficeDto {
  @IsString()
  @Length(3, 24)
  name!: string;
}

export class WorkspaceOfficeModelDto {
  id!: string;
  name!: string;
  workspaceId!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor(partial: Partial<WorkspaceOfficeModelDto>) {
    Object.assign(this, partial);
  }
}

export class OfficeTokenResponseDto {
  token!: string;
  url!: string;
}

