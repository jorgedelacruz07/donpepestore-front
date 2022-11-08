import { TLocation, TPhone } from "./user";

type TClient = {
  firstName: string;
  lastName: string;
  email: string;
  location: TLocation;
  phone: TPhone;
};

type TPaymentInformation = {
  paymentTotal: number;
  discountTotal: number;
  paymentLink: string;
  paymentMethod: string;
  paymentStatus: string;
};

type TDeliveryInformation = {
  createdAt: string;
  deliveredAt: string;
};

export type TTransaction = {
  d: string;
  code: string;
  client?: TClient;
  paymentInformation?: TPaymentInformation;
  deliveryInformation?: TDeliveryInformation;
  total: string;
  createdAt: string;
  updatedAt: string;
};
