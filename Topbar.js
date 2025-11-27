function Topbar({ currentUser, notifications }) {
  try {
    const [showNotifications, setShowNotifications] = React.useState(false);

    return (
      <div 
        className="h-16 bg-white border-b border-[var(--border-color)] flex items-center justify-end px-6 gap-4"
        data-name="topbar"
        data-file="components/Topbar.js"
      >
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 hover:bg-[var(--bg-light)] rounded-lg transition"
          >
            <div className="icon-bell text-xl text-[var(--text-dark)]"></div>
            {notifications > 0 && (
              <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {notifications}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-[var(--border-color)] p-4 z-50">
              <h3 className="font-semibold mb-3">Notificaciones</h3>
              <div className="space-y-2">
                <div className="p-3 bg-[var(--bg-light)] rounded-lg">
                  <p className="text-sm font-medium">Nueva actualización disponible</p>
                  <p className="text-xs text-[var(--text-light)]">Hace 2 horas</p>
                </div>
                <div className="p-3 bg-[var(--bg-light)] rounded-lg">
                  <p className="text-sm font-medium">Nuevo usuario registrado</p>
                  <p className="text-xs text-[var(--text-light)]">Hace 5 horas</p>
                </div>
                <div className="p-3 bg-[var(--bg-light)] rounded-lg">
                  <p className="text-sm font-medium">Mantenimiento programado</p>
                  <p className="text-xs text-[var(--text-light)]">Hace 1 día</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <button 
          onClick={logout}
          className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition"
        >
          <div className="icon-log-out text-lg"></div>
          <span className="text-sm font-medium">Salir</span>
        </button>
      </div>
    );
  } catch (error) {
    console.error('Topbar component error:', error);
    return null;
  }
}