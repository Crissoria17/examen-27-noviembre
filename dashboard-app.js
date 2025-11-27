class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Algo salió mal</h1>
            <button onClick={() => window.location.reload()} className="px-6 py-3 bg-[var(--primary-color)] text-white rounded-lg">
              Recargar
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function DashboardApp() {
  try {
    const [currentUser, setCurrentUser] = React.useState(null);
    const [notifications, setNotifications] = React.useState(3);

    React.useEffect(() => {
      const user = getCurrentUser();
      if (!user) {
        window.location.href = 'index.html';
        return;
      }
      setCurrentUser(user);
    }, []);

    if (!currentUser) return null;

    return (
      <div className="flex h-screen" data-name="dashboard-app" data-file="dashboard-app.js">
        <Sidebar currentUser={currentUser} />
        
        <div className="flex-1 flex flex-col">
          <Topbar currentUser={currentUser} notifications={notifications} />
          
          <main className="flex-1 overflow-auto p-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-[var(--text-dark)] mb-2">Dashboard</h1>
              <p className="text-[var(--text-light)] mb-8">Bienvenido, {currentUser.name}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard icon="users" title="Usuarios Totales" value="156" color="blue" />
                <StatCard icon="shield-check" title="Roles Activos" value="3" color="green" />
                <StatCard icon="activity" title="Sesiones Activas" value="24" color="purple" />
                <StatCard icon="clock" title="Versión Sistema" value="2.1.0" color="orange" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold mb-4">Actividad Reciente</h3>
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-[var(--bg-light)] rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-[var(--secondary-color)] flex items-center justify-center">
                          <div className="icon-user text-sm text-[var(--primary-color)]"></div>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Usuario {i} realizó una acción</p>
                          <p className="text-xs text-[var(--text-light)]">Hace {i} hora(s)</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold mb-4">Permisos de tu Rol</h3>
                  <div className="space-y-2">
                    {currentUser.permissions.map((perm, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2">
                        <div className="icon-check text-green-600 text-sm"></div>
                        <span className="text-sm">{perm}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error('DashboardApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <DashboardApp />
  </ErrorBoundary>
);