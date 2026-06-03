import React, { useState } from 'react';
import { mockListings } from '../lib/mockData';
import { useAuth } from '../context/AuthContext';
import ListingCard from '../components/ListingCard';
import { Filter, SlidersHorizontal } from 'lucide-react';

const CATEGORIES = ['All', 'Academic', 'Uniforms', 'School Essentials', 'Electronics', 'Events', 'Services'];

const Home: React.FC = () => {
  const { user } = useAuth();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredListings = mockListings.filter(l => {
    const categoryMatch = activeCategory === 'All' || l.category === activeCategory;
    // Show listings from same school first, but keep all for MVP feed
    return categoryMatch;
  });

  // Sort: Boosted first, then by school match
  const sortedListings = [...filteredListings].sort((a, b) => {
    if (a.isBoosted && !b.isBoosted) return -1;
    if (!a.isBoosted && b.isBoosted) return 1;
    if (a.school === user?.school && b.school !== user?.school) return -1;
    if (a.school !== user?.school && b.school === user?.school) return 1;
    return 0;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Hello, {user?.name}!</h1>
            <p className="text-sm text-gray-500">Showing items for <span className="font-semibold text-blue-600">{user?.school}</span></p>
          </div>
          <button className="p-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50">
            <SlidersHorizontal size={20} className="text-gray-600" />
          </button>
        </div>

        <div className="flex overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide space-x-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>

      {sortedListings.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500">No listings found in this category yet.</p>
          <button className="mt-4 text-blue-600 font-semibold">Post the first one!</button>
        </div>
      )}
    </div>
  );
};

export default Home;
