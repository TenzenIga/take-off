import React from 'react';
import './App.css';
import {
  Route,
  Routes
} from "react-router-dom";

import LoginObserver from './components/Login/Login';
import MainPageObserver from './components/Main/MainPage';
import ProtectedRouteObserver from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <ProtectedRouteObserver>
          <MainPageObserver />
        </ProtectedRouteObserver>
      } />
      <Route path="/login" element={<LoginObserver />} />
  </Routes>
  );
}

export default App;
