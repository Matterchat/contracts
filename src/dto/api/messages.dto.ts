export class MessageModelDto {
  id!: string;
  content!: string;
  channelId!: string;
  userId!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor(partial: Partial<MessageModelDto>) {
    Object.assign(this, partial);
  }
}

export type MessageModel = MessageModelDto;
