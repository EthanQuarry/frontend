import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import FlashCards from './main/flashcards/flashcards';
import Dashboard from './main/dashboard/dashboard';
import StudySet from './components/study-set';


const App: React.FC = () => {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<FlashCards />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/study-set/:slug" element={<StudySet />} />
      </Routes>
    </Router>
 );
};

export default App;