function Alert({ type, message }) {
  try {
    const bgColor = type === 'error' ? 'bg-red-500' : 'bg-green-500';
    
    return (
      <div 
        className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-fade-in`}
        data-name="alert"
        data-file="components/Alert.js"
      >
        <div className="flex items-center gap-3">
          <div className={type === 'error' ? 'icon-alert-circle' : 'icon-check-circle'}></div>
          <span>{message}</span>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Alert component error:', error);
    return null;
  }
}