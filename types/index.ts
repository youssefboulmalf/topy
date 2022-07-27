export type VotesType = {
  count: number;
  value: number;
};

export type PunctuationType = {
  countOpinions: number;
  punctuation: number;
  votes: VotesType[];
};

export type ReviewType = {
  name: string;
  avatar: string;
  description: string;
  punctuation: number;
};

export type ProductType = {
  id: string;
  name: string;
  thumb: string;
  price: string;
  count: number;
  date: string;
  images: string[];
  discount?: string;
  currentPrice: number;
  punctuation: PunctuationType;
  reviews: ReviewType[];
};
export interface Products {
  id: string;
  name: string;
  price: number;
  discount: number;
  category: string;
  currentPrice: number;
  locations: [];
  images: [];
  punctuation: {};
  reviews: [];
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
  date: string;
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
