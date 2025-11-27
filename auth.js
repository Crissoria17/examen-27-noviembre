const USERS_DB = [
  {
    id: '1',
    email: 'super1@admin.com',
    password: 'super123',
    name: 'Super Usuario 1',
    role: 'superuser',
    permissions: ['Gestión total', 'Crear usuarios', 'Eliminar usuarios', 'Modificar roles', 'Acceso a todas las secciones']
  },
  {
    id: '2',
    email: 'super2@admin.com',
    password: 'super123',
    name: 'Super Usuario 2',
    role: 'superuser',
    permissions: ['Gestión total', 'Crear usuarios', 'Eliminar usuarios', 'Modificar roles', 'Acceso a todas las secciones']
  },
  {
    id: '3',
    email: 'admin1@admin.com',
    password: 'admin123',
    name: 'Administrador 1',
    role: 'admin',
    permissions: ['Gestión de usuarios', 'Ver reportes', 'Modificar contenido', 'Gestión de permisos básicos']
  },
  {
    id: '4',
    email: 'admin2@admin.com',
    password: 'admin123',
    name: 'Administrador 2',
    role: 'admin',
    permissions: ['Gestión de usuarios', 'Ver reportes', 'Modificar contenido', 'Gestión de permisos básicos']
  },
  {
    id: '5',
    email: 'user1@admin.com',
    password: 'user123',
    name: 'Usuario 1',
    role: 'user',
    permissions: ['Ver dashboard', 'Ver perfil', 'Editar perfil propio']
  },
  {
    id: '6',
    email: 'user2@admin.com',
    password: 'user123',
    name: 'Usuario 2',
    role: 'user',
    permissions: ['Ver dashboard', 'Ver perfil', 'Editar perfil propio']
  }
];

async function authenticateUser(email, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = USERS_DB.find(u => u.email === email && u.password === password);
      
      if (user) {
        const { password, ...userWithoutPassword } = user;
        resolve({
          success: true,
          user: userWithoutPassword,
          message: 'Login exitoso'
        });
      } else {
        resolve({
          success: false,
          message: 'Credenciales incorrectas'
        });
      }
    }, 500);
  });
}

function getCurrentUser() {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}