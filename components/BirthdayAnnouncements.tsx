
'use client';

export default function BirthdayAnnouncements() {
  const birthdays = [
    { name: 'Sara Alhjaji', department: 'Human Resources', date: 'Today', avatar: 'SA' },
    { name: 'Anas Mahmoud', department: 'IT Department', date: 'July 10', avatar: 'AM' },
    { name: 'Mona Osman', department: 'Finance', date: 'March 15', avatar: 'MO' },
    { name: 'Ahmed Khalil', department: 'Operations', date: 'March 18', avatar: 'AK' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 font-sans">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-primary">Birthday Celebrations</h3>
        <i className="ri-cake-2-line w-5 h-5 flex items-center justify-center text-accent text-xl"></i>
      </div>

      <div className="space-y-4">
        {birthdays.map((birthday, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-3 hover:bg-bgLight rounded-lg transition-colors"
          >
            <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-semibold text-sm">
              {birthday.avatar}
            </div>

            <div className="flex-1">
              <h4 className="font-medium text-neutralText">{birthday.name}</h4>
              <p className="text-sm text-gray-500">{birthday.department}</p>
            </div>

            <div className="text-right">
              <p className="text-sm font-medium text-primary">{birthday.date}</p>
              <div className="flex items-center space-x-1 mt-1">
                <span className="text-xs">🎂</span>
                <span className="text-xs text-gray-500">Birthday</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-[#741234] transition-colors text-sm font-medium cursor-pointer">
          Send Birthday Wishes
        </button>
      </div>
    </div>
  );
}
