import React from 'react';
import { useAuth } from '../context/AuthContext';
import { mockListings } from '../lib/mockData';
import ListingCard from '../components/ListingCard';
import { Settings, LogOut, Star, Package, CheckCircle } from 'lucide-react';

const Profile: React.FC = () => {
  const { user, logout } = useAuth();
  
  const userListings = mockListings.filter(l => l.sellerId === 'u1'); // Mocking current user's listings

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-10">
      <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 space-y-4 md:space-y-0">
          <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            {user?.name.charAt(0)}
          </div>
          
          <div className="flex-1 text-center md:text-left space-y-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>
              <div className="flex space-x-2 mt-2 md:mt-0">
                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
                  <Settings size={20} />
                </button>
                <button 
                  onClick={logout}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg flex items-center space-x-1"
                >
                  <LogOut size={20} />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            </div>
            
            <p className="text-gray-500 font-medium">{user?.school}</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-lg font-bold text-gray-900">4.8</span>
                <div className="flex items-center text-xs text-gray-500">
                  <Star size={12} className="text-yellow-400 mr-1 fill-yellow-400" />
                  Trust Score
                </div>
              </div>
              <div className="w-px h-8 bg-gray-200 hidden sm:block"></div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-lg font-bold text-gray-900">12</span>
                <div className="flex items-center text-xs text-gray-500">
                  <CheckCircle size={12} className="text-green-500 mr-1" />
                  Trades Done
                </div>
              </div>
              <div className="w-px h-8 bg-gray-200 hidden sm:block"></div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-lg font-bold text-gray-900">{userListings.length}</span>
                <div className="flex items-center text-xs text-gray-500">
                  <Package size={12} className="text-blue-500 mr-1" />
                  Active Posts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">My Listings</h2>
        {userListings.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {userListings.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-12 text-center border-2 border-dashed border-gray-200">
            <Package size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">You haven't posted any items yet.</p>
            <button className="mt-4 text-blue-600 font-bold">Start Selling</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
