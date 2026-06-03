export type Category = 
  | 'Academic' 
  | 'Uniforms' 
  | 'School Essentials' 
  | 'Electronics' 
  | 'Events' 
  | 'Services';

export type Condition = 'New' | 'Like New' | 'Used' | 'Poor';

export interface User {
  id: string;
  name: string;
  school: string;
  avatar?: string;
  trustScore: number;
  completedTrades: number;
  listingsCount: number;
}

export interface Listing {
  id: string;
  title: string;
  price: number;
  category: Category;
  condition: Condition;
  description: string;
  images: string[];
  school: string;
  sellerId: string;
  sellerName: string;
  postedAt: string;
  contactUrl: string;
  isBoosted?: boolean;
}
