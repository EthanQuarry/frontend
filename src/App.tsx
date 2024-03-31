import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import FlashCards from './main/flashcards/flashcards';
import Dashboard from './main/dashboard/dashboard';
import SetEdit from './components/study-set';
import SetStudy from './components/set-study';


const App: React.FC = () => {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<FlashCards />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit/:slug" element={<SetEdit />} />
        <Route path="/study/:slug" element={<SetStudy />} />
      </Routes>
    </Router>
 );
};

export default App;