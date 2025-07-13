
'use client';

import QuickStats from '../components/QuickStats';
import LeaveBalanceChart from '../components/LeaveBalanceChart';
import TodoList from '../components/TodoList';
import Calendar from '../components/Calendar';
import BirthdayAnnouncements from '../components/BirthdayAnnouncements';

export default function Dashboard() {
  return (
    <div className="p-4 md:p-6 lg:p-10 bg-amber-50 min-h-screen font-sans">
      {/* Welcome Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-rose-900 mb-1">Welcome back, Fatma!</h1>
        <p className="text-amber-700">Here's what's happening in your workplace today</p>
      </div>

      {/* Quick Stats - render ONCE only */}
      <QuickStats />

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left side: Leave + Birthdays */}
        <div className="col-span-2 flex flex-col gap-6">
          <div className="bg-white shadow-md rounded-2xl p-4">
            <h2 className="text-lg font-semibold text-rose-900 mb-4">Leave Balance</h2>
            <LeaveBalanceChart />
          </div>

          <div className="bg-white shadow-md rounded-2xl p-4">
            <h2 className="text-lg font-semibold text-rose-900 mb-4">Birthday Celebrations</h2>
            <BirthdayAnnouncements />
          </div>
        </div>

        {/* Right side: To-Do + Calendar */}
        <div className="flex flex-col gap-6">
          <div className="bg-white shadow-md rounded-2xl p-4">
            <h2 className="text-lg font-semibold text-rose-900 mb-4">To-Do List</h2>
            <TodoList />
          </div>

          <div className="bg-white shadow-md rounded-2xl p-4">
            <h2 className="text-lg font-semibold text-rose-900 mb-4">Calendar</h2>
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}
