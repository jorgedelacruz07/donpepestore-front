export type TLocation = {
  district?: string;
  city: string;
  state?: string;
  country: string;
  addressLine1: string;
  addressLine2?: string;
  postalCode?: string;
};

export type TPhone = {
  code: string;
  number: number;
};

export type TUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  location?: TLocation;
  phone?: TPhone;
  createdAt: string;
  updatedAt: string;
};
