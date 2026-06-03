import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, X } from 'lucide-react';
import { Category, Condition } from '../types';

const CATEGORIES: Category[] = ['Academic', 'Uniforms', 'School Essentials', 'Electronics', 'Events', 'Services'];
const CONDITIONS: Condition[] = ['New', 'Like New', 'Used', 'Poor'];

const CreateListing: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '' as Category,
    condition: '' as Condition,
    description: '',
    contactUrl: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we'd send this to an API
    console.log('Form submitted:', formData);
    alert('Listing created successfully! (Mock)');
    navigate('/');
  };

  return (
    <div className="max-w-xl mx-auto pb-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Create New Listing</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Photos (up to 5)</label>
          <div className="flex gap-2 overflow-x-auto pb-2">
            <label className="flex-shrink-0 w-24 h-24 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-400 hover:border-blue-500 hover:text-blue-500 cursor-pointer transition-colors">
              <Camera size={24} />
              <span className="text-[10px] mt-1 font-medium">Add Photo</span>
              <input type="file" className="hidden" multiple accept="image/*" />
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              required
              placeholder="What are you selling?"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
              <input
                type="number"
                required
                placeholder="0.00"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as Category })}
              >
                <option value="">Select...</option>
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Condition</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {CONDITIONS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFormData({ ...formData, condition: c })}
                  className={`py-2 px-3 rounded-lg text-sm font-medium border ${
                    formData.condition === c
                      ? 'bg-blue-50 border-blue-600 text-blue-600'
                      : 'bg-white border-gray-300 text-gray-600'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              required
              rows={4}
              placeholder="Describe your item, its features, and any flaws..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Link (Messenger/WhatsApp)</label>
            <input
              type="url"
              required
              placeholder="https://m.me/yourusername"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={formData.contactUrl}
              onChange={(e) => setFormData({ ...formData, contactUrl: e.target.value })}
            />
          </div>
        </div>

        <div className="pt-4 flex gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-[2] bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Post Listing
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateListing;
