export const GatewayEvent = {
  GatewayConnected: "gateway.connected",
} as const;

export type GatewayEvent = (typeof GatewayEvent)[keyof typeof GatewayEvent];
