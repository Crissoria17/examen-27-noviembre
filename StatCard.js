function StatCard({ icon, title, value, color }) {
  try {
    const colorMap = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
      green: { bg: 'bg-green-100', text: 'text-green-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600' }
    };

    const colors = colorMap[color] || colorMap.blue;

    return (
      <div 
        className="bg-white rounded-xl shadow-sm p-6"
        data-name="stat-card"
        data-file="components/StatCard.js"
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[var(--text-light)] text-sm mb-1">{title}</p>
            <p className="text-3xl font-bold text-[var(--text-dark)]">{value}</p>
          </div>
          <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
            <div className={`icon-${icon} text-xl ${colors.text}`}></div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('StatCard component error:', error);
    return null;
  }
}