function Sidebar({ currentUser }) {
  try {
    return (
      <div 
        className="w-[var(--sidebar-width)] bg-white border-r border-[var(--border-color)] flex flex-col"
        data-name="sidebar"
        data-file="components/Sidebar.js"
      >
        <div className="p-6 border-b border-[var(--border-color)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--primary-color)] flex items-center justify-center">
              <div className="icon-shield-check text-xl text-white"></div>
            </div>
            <div>
              <h2 className="font-bold text-lg">AdminSys</h2>
              <p className="text-xs text-[var(--text-light)]">v2.1.0</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <div className="space-y-1">
            <a href="dashboard.html" className="flex items-center gap-3 px-4 py-3 bg-[var(--secondary-color)] text-[var(--primary-color)] rounded-lg font-medium">
              <div className="icon-layout-dashboard text-lg"></div>
              <span>Dashboard</span>
            </a>
            
            {(currentUser.role === 'superuser' || currentUser.role === 'admin') && (
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-[var(--text-light)] hover:bg-[var(--bg-light)] rounded-lg transition">
                <div className="icon-users text-lg"></div>
                <span>Usuarios</span>
              </a>
            )}
            
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-[var(--text-light)] hover:bg-[var(--bg-light)] rounded-lg transition">
              <div className="icon-settings text-lg"></div>
              <span>Configuración</span>
            </a>
          </div>
        </nav>

        <div className="p-4 border-t border-[var(--border-color)]">
          <div className="flex items-center gap-3 p-3 bg-[var(--bg-light)] rounded-lg">
            <div className="w-10 h-10 rounded-full bg-[var(--secondary-color)] flex items-center justify-center">
              <div className="icon-user text-lg text-[var(--primary-color)]"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">{currentUser.name}</p>
              <p className="text-xs text-[var(--text-light)] capitalize">{currentUser.role}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Sidebar component error:', error);
    return null;
  }
}