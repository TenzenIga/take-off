import React from 'react';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import MainPage from './components/Main/MainPage';
import {
  Route,
  Routes
} from "react-router-dom";
import LoginObserver from './components/Login/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <ProtectedRoute>
            <MainPage />
        </ProtectedRoute>
      } />
      <Route path="/login" element={<LoginObserver />} />
  </Routes>
  );
}

export default App;
