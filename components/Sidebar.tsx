
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'ri-dashboard-3-line', href: '/' },
    { id: 'stationary', label: 'Stationary Request', icon: 'ri-pencil-ruler-2-line', href: '/stationary-request' },
    { id: 'maintenance', label: 'IT Maintenance', icon: 'ri-tools-line', href: '/it-maintenance' },
    { id: 'parking', label: 'Parking Request', icon: 'ri-car-line', href: '/parking-request' },
    { id: 'permit', label: 'Entry Permit', icon: 'ri-shield-check-line', href: '/entry-permit' },
    { id: 'business-card', label: 'Business Card', icon: 'ri-contacts-book-line', href: '/business-card' },
  ];

  return (
    <aside className="w-64 bg-amber-950 text-white min-h-screen">
      <div className="p-6">
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link key={item.id} href={item.href} className="block">
              <div
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-amber-800 text-white'
                    : 'text-amber-100 hover:bg-amber-900 hover:text-white'
                }`}
              >
                <i className={`${item.icon} w-5 h-5 items-center justify-center text-xl`} />
                <span className="font-medium">{item.label}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
