import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import LoginForm from './Components/Auth/LoginForm';
import InvoiceForm from './Components/Form/InvoiceForm';
import { useEffect, useState } from 'react';
// import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary'; // Import ErrorBoundary


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem('user'));
    setIsLoggedIn(!!session); // Convert to boolean
  }, []);

  return (
    <Router>
      <Routes>
        {/* Root Route */}
        <Route path="/" element={<Navigate to={isLoggedIn ? "/invoice-form" : "/login"} replace />} />

        {/* Login Route */}
        <Route path="/login" element={isLoggedIn ? <Navigate to="/invoice-form" replace /> : <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />

        {/* Protected Route */}
        <Route
          path="/invoice-form"
          element={isLoggedIn ? <InvoiceForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/login" replace />}
        />

        {/* Catch-All Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
