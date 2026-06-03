import React from 'react';
import { Link } from 'react-router-dom';
import { Listing } from '../types';
import { Clock, MapPin, Tag } from 'lucide-react';

interface ListingCardProps {
  listing: Listing;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <Link to={`/listing/${listing.id}`} className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={listing.images[0]}
          alt={listing.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {listing.isBoosted && (
          <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
            Featured
          </div>
        )}
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-sm font-semibold text-blue-600">
          ${listing.price}
        </div>
      </div>
      
      <div className="p-3">
        <div className="flex items-center text-[10px] text-gray-500 space-x-2 mb-1">
          <span className="bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-medium">{listing.category}</span>
          <span className="flex items-center"><Clock size={10} className="mr-0.5" /> 2h ago</span>
        </div>
        
        <h3 className="font-semibold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {listing.title}
        </h3>
        
        <div className="flex items-center justify-between mt-2 text-[11px] text-gray-500">
          <div className="flex items-center">
            <MapPin size={10} className="mr-0.5" />
            <span className="truncate max-w-[80px]">{listing.school}</span>
          </div>
          <div className="flex items-center">
            <Tag size={10} className="mr-0.5" />
            <span>{listing.condition}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
