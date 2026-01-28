import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

// Component Imports
import AnimatedRoutes from './components/AnimatedRoutes'; // Assuming this exists
import Login from './pages/Login';
import { ProtectedAdminPage, ProtectedCoursesPage, ProtectedEmployeePage } from './pages/ProtectedPages';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <Link to="/">Home</Link> { " | " }
        <Link to="/employees">Employees</Link>{ " | " }
        <Link to="/courses">Courses</Link>{ " | " }
        <Link to="/admin">Admin</Link>{ " | " }
      </nav>

      <AnimatedRoutes/>
           
      <Login/>
      
      {/* Note: Usually these would be inside <Routes> tags, 
        but I have left them here as they were in your original code.
      */}
      <ProtectedEmployeePage/>
      <ProtectedAdminPage/>
      <ProtectedCoursesPage />
    </>
  );
}

export default App;