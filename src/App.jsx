import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Routes components
import './App.css';
import LoginForm from './Components/Auth/LoginForm';
import InvoiceForm from './Components/Form/InvoiceForm';

// Import necessary pages/components


function App() {
  return (
    <Router>
      {/* <div> */}
      <Routes>
        <Route path="/login" element={<LoginForm />} /> {/* Login Page Route */}
        <Route path="/invoice-form" element={<InvoiceForm />} /> {/* Invoice Form Page Route */}
      </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
