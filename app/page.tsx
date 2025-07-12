
'use client';

import QuickStats from '../components/QuickStats';
import LeaveBalanceChart from '../components/LeaveBalanceChart';
import TodoList from '../components/TodoList';
import Calendar from '../components/Calendar';
import BirthdayAnnouncements from '../components/BirthdayAnnouncements';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-amber-900 mb-1">
          Welcome back, Fatma!
        </h1>
        <p className="text-amber-700">
          Here’s what’s happening in your workplace today
        </p>
      </div>

      {/* Quick Stats */}
      <QuickStats />

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Left side */}
        <div className="lg:col-span-2 space-y-6">
          <LeaveBalanceChart />
          <BirthdayAnnouncements />
        </div>

        {/* Right side */}
        <div className="space-y-6">
          <TodoList />
          <Calendar />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-10 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-amber-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ActionButton icon="ri-pencil-ruler-line" label="Request Stationary" />
          <ActionButton icon="ri-tools-line" label="IT Support" />
          <ActionButton icon="ri-shield-check-line" label="Parking Permit" />
          <ActionButton icon="ri-contacts-book-line" label="Business Card" />
          <ActionButton icon="ri-calendar-check-line" label="Leave Request" />
        </div>
      </div>
    </div>
  );
}

function ActionButton({ icon, label }: { icon: string; label: string }) {
  return (
    <button className="flex flex-col items-center p-4 border-2 border-dashed border-amber-200 rounded-xl hover:bg-amber-50 transition">
      <i className={`${icon} w-8 h-8 text-amber-900 flex items-center justify-center`} />
      <span className="text-sm font-medium text-amber-900 whitespace-nowrap">{label}</span>
    </button>
  );
}
