
'use client';

export default function BirthdayAnnouncements() {
  const birthdays = [
    {
      name: 'Sara Alhjaji',
      department: 'Human Resources',
      date: 'Today',
      avatar: 'SA'
    },
    {
      name: 'Anas Mahmoud',
      department: 'IT Department',
      date: 'Tomorrow',
      avatar: 'AM'
    },
    {
      name: 'Mona Osman',
      department: 'Finance',
      date: 'March 15',
      avatar: 'MO'
    },
    {
      name: 'Ahmed Khalil',
      department: 'Operations',
      date: 'March 18',
      avatar: 'AK'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-amber-900">Birthday Celebrations</h3>
        <i className="ri-cake-2-line w-5 h-5 flex items-center justify-center text-pink-500 text-xl"></i>
      </div>

      <div className="space-y-4">
        {birthdays.map((birthday, index) => (
          <div key={index} className="flex items-center space-x-4 p-3 hover:bg-amber-50 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
              {birthday.avatar}
            </div>

            <div className="flex-1">
              <h4 className="font-medium text-gray-900">{birthday.name}</h4>
              <p className="text-sm text-gray-600">{birthday.department}</p>
            </div>

            <div className="text-right">
              <p className="text-sm font-medium text-amber-900">{birthday.date}</p>
              <div className="flex items-center space-x-1 mt-1">
                <span className="text-xs text-pink-500">🎂</span>
                <span className="text-xs text-gray-500">Birthday</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer">
          Send Birthday Wishes
        </button>
      </div>
    </div>
  );
}
