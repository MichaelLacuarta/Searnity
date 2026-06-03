import { Listing, User } from '../types';

export const mockUsers: User[] = [
  {
    id: 'u1',
    name: 'John Doe',
    school: 'Central High',
    trustScore: 4.8,
    completedTrades: 12,
    listingsCount: 5
  },
  {
    id: 'u2',
    name: 'Jane Smith',
    school: 'Westside Academy',
    trustScore: 4.5,
    completedTrades: 8,
    listingsCount: 3
  }
];

export const mockListings: Listing[] = [
  {
    id: 'l1',
    title: 'Advanced Calculus Textbook',
    price: 45,
    category: 'Academic',
    condition: 'Like New',
    description: 'Hardly used textbook for Advanced Calculus. No markings.',
    images: ['https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400'],
    school: 'Central High',
    sellerId: 'u1',
    sellerName: 'John Doe',
    postedAt: new Date().toISOString(),
    contactUrl: 'https://m.me/johndoe',
    isBoosted: true
  },
  {
    id: 'l2',
    title: 'School Hoodie - Size M',
    price: 25,
    category: 'Uniforms',
    condition: 'Used',
    description: 'Official school hoodie, slightly faded but still in good condition.',
    images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=400'],
    school: 'Westside Academy',
    sellerId: 'u2',
    sellerName: 'Jane Smith',
    postedAt: new Date().toISOString(),
    contactUrl: 'https://m.me/janesmith'
  },
  {
    id: 'l3',
    title: 'Graphing Calculator TI-84',
    price: 80,
    category: 'Electronics',
    condition: 'New',
    description: 'Brand new graphing calculator, still in box.',
    images: ['https://images.unsplash.com/photo-1594673701679-5f9bc9ca4491?auto=format&fit=crop&q=80&w=400'],
    school: 'Central High',
    sellerId: 'u1',
    sellerName: 'John Doe',
    postedAt: new Date().toISOString(),
    contactUrl: 'https://m.me/johndoe'
  }
];
