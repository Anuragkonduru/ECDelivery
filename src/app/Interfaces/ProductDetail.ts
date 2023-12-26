export interface ProductDetail {
  product_id: string;
  product_id_v2: string;
  product_title: string;
  product_description: string;
  product_photo: string;
  product_photos: string[];
  product_attributes: any;
  product_rating: number;
  product_page_url: string;
  product_num_reviews: number;
  product_num_offers: string;
  typical_price_range: string[];
  product_variant_properties: any;
  product_variants: any;
  price: string;
  original_price: string;
  offer: {
    shipping: string;
    tax: string;
    on_sale: boolean;
    product_condition: string;
  };
}

