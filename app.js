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
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Algo salió mal</h1>
            <p className="text-gray-600 mb-4">Lo sentimos, ocurrió un error inesperado.</p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Recargar Página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [alert, setAlert] = React.useState(null);

    const handleLogin = async (e) => {
      e.preventDefault();
      const result = await authenticateUser(email, password);
      
      if (result.success) {
        localStorage.setItem('currentUser', JSON.stringify(result.user));
        window.location.href = 'dashboard.html';
      } else {
        setAlert({ type: 'error', message: result.message });
        setTimeout(() => setAlert(null), 3000);
      }
    };

    return (
      <div className="min-h-screen flex" data-name="app" data-file="app.js">
        {alert && <Alert type={alert.type} message={alert.message} />}
        
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] items-center justify-center p-12">
          <div className="text-white max-w-md">
            <div className="icon-shield-check text-6xl mb-6"></div>
            <h1 className="text-4xl font-bold mb-4">Sistema de Administración</h1>
            <p className="text-lg opacity-90">Control total con gestión de roles y versiones</p>
            <div className="mt-8 space-y-3 text-sm opacity-80">
              <p>✓ Control de acceso por roles</p>
              <p>✓ Gestión de usuarios y permisos</p>
              <p>✓ Dashboard interactivo</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[var(--text-dark)] mb-2">Bienvenido</h2>
              <p className="text-[var(--text-light)]">Ingresa tus credenciales para continuar</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                  placeholder="usuario@ejemplo.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                  Contraseña
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button type="submit" className="w-full btn-primary">
                Iniciar Sesión
              </button>
            </form>

            <div className="mt-8 p-4 bg-[var(--secondary-color)] rounded-lg">
              <p className="text-xs font-semibold text-[var(--text-dark)] mb-2">Usuarios de prueba:</p>
              <p className="text-xs text-[var(--text-light)]">Super: super@admin.com / super123</p>
              <p className="text-xs text-[var(--text-light)]">Admin: admin@admin.com / admin123</p>
              <p className="text-xs text-[var(--text-light)]">Usuario: user@admin.com / user123</p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);