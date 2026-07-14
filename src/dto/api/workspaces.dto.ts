import { IsString, Length, Matches } from "class-validator";

export class CreateWorkspaceBodyDto {
  @IsString()
  @Length(3, 64)
  @Matches(/^[\x00-\x7F]*$/, {
    message: "Workspace name must contain only ASCII characters",
  })
  name!: string;
}

export class WorkspaceModelDto {
  id!: string;
  name!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor(partial: Partial<WorkspaceModelDto>) {
    Object.assign(this, partial);
  }
}
