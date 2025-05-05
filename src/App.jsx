import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import LoginForm from './Components/Auth/LoginForm';
import InvoiceForm from './Components/Form/InvoiceForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} /> {/* Redirect root to /login */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/invoice-form" element={<InvoiceForm />} />
      </Routes>
    </Router>
  );
}

export default App;
