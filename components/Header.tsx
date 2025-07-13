
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 font-sans">
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
                <h1 className="text-xl font-bold text-primary">Employee Portal</h1>
                <p className="text-sm text-neutralText">National Planning Council</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-primary hover:bg-bgLight rounded-lg transition">
              <i className="ri-notification-3-line text-xl"></i>
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 p-2 hover:bg-bgLight rounded-lg transition"
              >
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
                  FA
                </div>
                <span className="text-primary font-medium">Fatma Alkuwari</span>
                <i className="ri-arrow-down-s-line text-primary text-base"></i>
              </button>
              
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <a href="#" className="block px-4 py-2 text-neutralText hover:bg-bgLight">Profile Settings</a>
                  <a href="#" className="block px-4 py-2 text-neutralText hover:bg-bgLight">Change Password</a>
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
