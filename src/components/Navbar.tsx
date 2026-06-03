import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, PlusSquare, Heart, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Search', path: '/search' },
    { icon: PlusSquare, label: 'Sell', path: '/create' },
    { icon: Heart, label: 'Saved', path: '/saved' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-2 md:top-0 md:bottom-auto md:px-12 md:py-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="hidden md:flex items-center space-x-2 text-blue-600 font-bold text-xl">
          <span>CampusMarket</span>
        </Link>
        
        <div className="flex justify-between w-full md:w-auto md:space-x-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center space-y-1 ${
                  isActive ? 'text-blue-600' : 'text-gray-500 hover:text-blue-500'
                }`}
              >
                <Icon size={24} />
                <span className="text-[10px] md:hidden">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
