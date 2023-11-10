import React from 'react';
import './App.css';
import Header from './Header';
import KittenList from './KittenList';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <KittenList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
