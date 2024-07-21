export interface IReview {
  rating: string;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: IReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

export interface IProducts {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}

export interface IError {
    ok: boolean;
    message: unknown;
}