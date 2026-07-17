export const GatewayEvent = {
  GatewayConnected: "gateway.connected",
  GatewayMessageReceived: "gateway.message.received",

  ClientChannelChanged: "client.channel.changed",
  ClientMessageSent: "client.message.sent",
} as const;

export type GatewayEvent = (typeof GatewayEvent)[keyof typeof GatewayEvent];
