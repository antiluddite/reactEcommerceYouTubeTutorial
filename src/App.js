import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
// Switch has been changed to Router
import { Route, Router } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Router>
        <Route to="/" component={Home}/>
        <Route to="/product" component={Product}/>
        <Route to="/About" component={About}/>
        <Route to="/contact" component={Contact}/>
        <Redirect to="/home" />
      </Router>
      <Footer/>
    </>
  );
}

export default App;
