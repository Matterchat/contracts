export class GatewayTicketResponseDto {
  ticket!: string;

  constructor(ticket: string) {
    this.ticket = ticket;
  }
}
