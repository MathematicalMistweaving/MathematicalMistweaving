import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HealingSpells from './components/HealingSpells';
import Profile from './components/Profile';
import { TalentIFrame } from './components/Talents/TalentIFrame';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
        <React.Fragment>  
        <App />
        <Profile />
        <HealingSpells />
        </React.Fragment>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
