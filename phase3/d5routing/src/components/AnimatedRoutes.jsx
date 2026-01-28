import React, { useRef } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Home from '../pages/Home';
import Login from '../pages/Login';

import {
  ProtectedAdminPage,
  ProtectedCoursesPage,
  ProtectedEmployeePage
} from '../pages/ProtectedPages';

function AnimatedRoutes() {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={300}
        nodeRef={nodeRef}
      >
        <div ref={nodeRef}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/employees" element={<ProtectedEmployeePage />} />
            <Route path="/courses" element={<ProtectedCoursesPage />} />
            <Route path="/admin" element={<ProtectedAdminPage />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default AnimatedRoutes;
