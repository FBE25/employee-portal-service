
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://static.readdy.ai/image/cfa3a9c57168a66919186732cc94c9f6/501495bcb007c93ed9226b6cd4a4df23.jfif" 
                alt="Qatar National Council Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-amber-900">Employee Portal</h1>
                <p className="text-sm text-amber-700">Qatar National Council</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-amber-800 hover:bg-amber-50 rounded-lg">
              <i className="ri-notification-3-line w-5 h-5 flex items-center justify-center text-xl"></i>
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 p-2 hover:bg-amber-50 rounded-lg"
              >
                <div className="w-8 h-8 bg-amber-900 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  AH
                </div>
                <span className="text-amber-900 font-medium">Fatma Alkuwari</span>
                <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center text-amber-800"></i>
              </button>
              
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Profile Settings</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Change Password</a>
                  <hr className="my-2" />
                  <a href="#" className="block px-4 py-2 text-red-600 hover:bg-red-50">Sign Out</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
