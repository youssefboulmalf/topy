export type descriptionType = {
  name: string;
  text: string;
};

export type ProductType = {
  id: string;
  name: string;
  thumb: string;
  price: number;
  count: number;
  date: string;
  images: string[];
  discount?: string;
  currentPrice: number;
  smallDescription: string;
  description: descriptionType[];
  duration: number;
};

export interface Products {
  id: string;
  name: string;
  price: number;
  discount: number;
  category: string;
  currentPrice: number;
  locations: string[];
  images: string[];
  smallDescription: string;
  description: descriptionType[];
  duration: number;
  stripePrice?: string;
}

interface stripPrice {
  currency: string;
  unit_amount_decimal: number;
}

export interface StripeProducts {
  id: string;
  name: string;
  default_price_data?: stripPrice;
  default_price?: stripPrice;
  images: string[];
  description: string;
}
export type CheckoutOrder = {
  orderDetails: {
    items: ProductStoreType[];
    groupInfo: GroupMember[];
  };
  totalPrice: number;
  groupTotal: number;
};

export type Order = {
  id: string;
  creationDate: number;
  totalPrice: number;
  groupTotal: number;
  orderStatus: string;
  orderDetails: {
    items: ProductStoreType[];
    groupInfo: GroupMember[];
  };
  paymentLink: string;
  paymentStatus: string;
};

export type ProductTypeList = {
  id: string;
  name: string;
  price: string;
  color: string;
  images: string[];
  discount?: string;
  currentPrice?: number;
};

export type ProductStoreType = {
  id: string;
  name: string;
  thumb: string;
  price: number;
  count: number;
  date: Date;
};

export type GtagEventType = {
  action: string;
  category: string;
  label: string;
  value: string;
};

export interface GroupMember {
  age: string;
  email?: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

export interface GroupMemberObject {
  [key: number]: GroupMember;
}

export type AddProductType = {
  product: ProductStoreType;
  count: number;
};

export interface CartTypes {
  cartItems: ProductStoreType[];
}
