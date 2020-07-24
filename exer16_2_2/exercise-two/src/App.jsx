import React from 'react';
import Cars from './Cars';
import carProvider from './context/carProvider';
import './App.css';

export default function App() {
  return (
    <carProvider>
      <Cars/>
    </carProvider>
  );
}
