import React from 'react';
import { mockListings } from '../lib/mockData';
import ListingCard from '../components/ListingCard';
import { Heart } from 'lucide-react';

const SavedItems: React.FC = () => {
  // Mocking saved items (taking the first 2)
  const savedListings = mockListings.slice(0, 2);

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Heart size={24} className="text-red-500 fill-red-500" />
        <h1 className="text-2xl font-bold text-gray-900">Saved Items</h1>
      </div>

      {savedListings.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {savedListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <Heart size={48} className="mx-auto text-gray-200 mb-4" />
          <p className="text-gray-500">You haven't saved any items yet.</p>
          <button className="mt-4 text-blue-600 font-semibold">Browse Listings</button>
        </div>
      )}
    </div>
  );
};

export default SavedItems;
