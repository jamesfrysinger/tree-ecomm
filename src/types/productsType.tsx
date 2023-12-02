export interface IProduct {
  products: IProductDetails[];
  recommendations: IProductDetails[];
}

export interface IProductDetails {
  id: number;
  title: string;
  body: string;
  vendor: string;
  product_type: string;
  price: number;
  tags: string;
  images: TProductImages[];
  thumbnail: IProductThumbnail;
}

export type TProductImages = {
  id: number;
  product_id: number;
  created_at: string;
  updated_at: string;
  alt: null;
  width: number;
  height: number;
  src: string;
  variant_ids: [];
};

export interface IProductThumbnail {
  id: number;
  product_id: number;
  created_at: string;
  updated_at: string;
  alt: null;
  width: number;
  height: number;
  src: string;
  variant_ids: [];
}
