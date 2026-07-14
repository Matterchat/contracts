import { IsString, Length, Matches } from "class-validator";

export class CreateWorkspaceBodyDto {
  @IsString()
  @Length(3, 64)
  @Matches(/^[a-zA-Z0-9_-]+$/, {
    message:
      "Workspace name can only contain letters, numbers, underscores and dashes",
  })
  name!: string;
}
