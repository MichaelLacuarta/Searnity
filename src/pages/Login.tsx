import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { School } from 'lucide-react';

const SCHOOLS = ['Central High', 'Westside Academy', 'East Technical', 'South Lake Prep'];

const Login: React.FC = () => {
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && school) {
      login(school, name);
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-blue-600 p-3 rounded-full mb-4">
            <School className="text-white w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">CampusMarket</h1>
          <p className="text-gray-500 text-center mt-2">
            The hyper-local marketplace for your school community.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name or Nickname
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="e.g. John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Your School
            </label>
            <select
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            >
              <option value="">Choose a school...</option>
              {SCHOOLS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Enter Marketplace
          </button>
        </form>

        <p className="mt-8 text-xs text-gray-400 text-center leading-relaxed">
          By entering, you agree to follow your school's code of conduct and our community safety guidelines.
        </p>
      </div>
    </div>
  );
};

export default Login;
