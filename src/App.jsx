import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppoinmentList';
import Search from './Search';

const App = () => {
  return (
    
    <Router>
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<AppointmentList />} />
            <Route path="/create" element={<AppointmentForm />} />
            <Route path="/Search" element={<Search/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;