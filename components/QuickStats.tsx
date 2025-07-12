
'use client';

export default function QuickStats() {
  const stats = [
    {
      title: 'Pending Requests',
      value: '8',
      icon: 'ri-time-line',
      color: 'bg-amber-100 text-amber-800',
      iconColor: 'text-amber-600'
    },
    {
      title: 'Approved This Month',
      value: '24',
      icon: 'ri-check-line',
      color: 'bg-green-100 text-green-800',
      iconColor: 'text-green-600'
    },
    {
      title: 'Total Requests',
      value: '156',
      icon: 'ri-file-list-line',
      color: 'bg-blue-100 text-blue-800',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Active Permits',
      value: '3',
      icon: 'ri-shield-check-line',
      color: 'bg-purple-100 text-purple-800',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
            <div className={`p-3 rounded-lg ${stat.color}`}>
              <i className={`${stat.icon} w-6 h-6 flex items-center justify-center ${stat.iconColor} text-2xl`}></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
