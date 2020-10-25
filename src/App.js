import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import Random from './pages/random/Random'

function App() {
  return (
    <Router>
      <div className="app" id="grid-container">
        <Navbar />
          <main id="main-container">
            <Route path="/" exact component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/random" component={Random} />
          </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
