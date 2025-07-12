
'use client';
import { useState } from 'react';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const today = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const firstDayWeekday = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const events = {
    15: ['Team Meeting'],
    22: ['Project Deadline'],
    28: ['Performance Review']
  };
  
  const birthdays = {
    12: ['Sarah Ahmed'],
    25: ['Mohammed Ali'],
    30: ['Fatima Hassan']
  };

  const navigateMonth = (direction: number) => {
    setCurrentDate(new Date(year, month + direction, 1));
  };

  const renderCalendarDays = () => {
    const days = [];
    
    // Empty cells for days before month starts
    for (let i = 0; i < firstDayWeekday; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = 
        day === today.getDate() && 
        month === today.getMonth() && 
        year === today.getFullYear();
      
      const hasEvent = events[day as keyof typeof events];
      const hasBirthday = birthdays[day as keyof typeof birthdays];
      
      days.push(
        <div
          key={day}
          className={`p-2 min-h-[60px] border border-gray-100 relative ${
            isToday ? 'bg-amber-100 border-amber-300' : 'hover:bg-gray-50'
          }`}
        >
          <span className={`text-sm font-medium ${
            isToday ? 'text-amber-900' : 'text-gray-700'
          }`}>
            {day}
          </span>
          
          {hasEvent && (
            <div className="absolute top-6 left-1 right-1">
              <div className="bg-blue-500 text-white text-xs px-1 py-0.5 rounded truncate">
                {hasEvent[0]}
              </div>
            </div>
          )}
          
          {hasBirthday && (
            <div className="absolute bottom-1 left-1 right-1">
              <div className="bg-pink-500 text-white text-xs px-1 py-0.5 rounded truncate">
                🎂 {hasBirthday[0]}
              </div>
            </div>
          )}
        </div>
      );
    }
    
    return days;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-amber-900">Calendar</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => navigateMonth(-1)}
            className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <i className="ri-arrow-left-s-line w-4 h-4 flex items-center justify-center text-gray-600"></i>
          </button>
          <span className="text-sm font-medium text-gray-700 px-4">
            {monthNames[month]} {year}
          </span>
          <button
            onClick={() => navigateMonth(1)}
            className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center text-gray-600"></i>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1 text-sm">
        {renderCalendarDays()}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Upcoming Events</h4>
        <div className="space-y-1 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Team Meeting - March 15</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <span>Sarah's Birthday - March 12</span>
          </div>
        </div>
      </div>
    </div>
  );
}
