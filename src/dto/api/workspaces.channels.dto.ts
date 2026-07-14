import { IsString, Length } from "class-validator";

export class CreateWorkspaceChannelDto {
  @IsString()
  @Length(3, 24)
  name!: string;
}

export class WorkspaceChannelModelDto {
  id!: string;
  name!: string;
  workspaceId!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor(partial: Partial<WorkspaceChannelModelDto>) {
    Object.assign(this, partial);
  }
}
