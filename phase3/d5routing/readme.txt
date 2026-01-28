AnimatedRoutes.jsx
import React from 'react'
import {Routes ,Route , useLocation} from "react-router-dom"
import{CSSTransition, TransitionGroup} from 'react-transition-group'

import {useRef} from "react"
import Home from '../pages/Home'
import Employee from '../pages/Employee'
function AnimatedRoutes() {
    const location = useLocation(); 
    const nodeRef = useRef(null);
  return (
    <div>
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="fade" timeout={300} nodeRef ={nodeRef}>
            <div ref={nodeRef}>
            <Routes location={location}>
                <Route path="/" element ={<Home/>}/>
                <Route path="/employees" element ={<Employee/>}/>
            </Routes>
            </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}
export default AnimatedRoutes
//use Ref we have used to remember the DOM Element :
// because when transition tries to animate , then it won't find dom element so react throws an transition error

app.jsx

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