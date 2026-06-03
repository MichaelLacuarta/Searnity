import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockListings } from '../lib/mockData';
import { ArrowLeft, MessageCircle, Heart, Shield, MapPin, Tag } from 'lucide-react';

const ListingDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const listing = mockListings.find(l => l.id === id);

  if (!listing) {
    return <div className="p-8 text-center">Listing not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-blue-600">
        <ArrowLeft size={20} className="mr-1" />
        Back
      </button>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="aspect-[4/3] relative">
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <h1 className="text-2xl font-bold text-gray-900">{listing.title}</h1>
              <span className="text-2xl font-bold text-blue-600">${listing.price}</span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center"><MapPin size={16} className="mr-1" /> {listing.school}</span>
              <span className="flex items-center"><Tag size={16} className="mr-1" /> {listing.condition}</span>
            </div>
          </div>

          <div className="border-t border-b border-gray-100 py-6">
            <h2 className="font-semibold text-gray-900 mb-2">Description</h2>
            <p className="text-gray-600 leading-relaxed">{listing.description}</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                {listing.sellerName.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-gray-900">{listing.sellerName}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <Shield size={12} className="text-green-500 mr-1" />
                  <span>Trusted Member • 4.8★</span>
                </div>
              </div>
            </div>
            <button className="text-blue-600 text-sm font-semibold hover:underline">View Profile</button>
          </div>

          <div className="flex space-x-3 pt-4">
            <a
              href={listing.contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors"
            >
              <MessageCircle size={20} />
              <span>Contact Seller</span>
            </a>
            <button className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50">
              <Heart size={24} className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;
