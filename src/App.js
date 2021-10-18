
import './App.css';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home/Home';
import ProductList from './components/pages/ProductList/ProductList';
import Navbar from './components/Navbar/Navbar';
import Anouncement from './components/Anouncement';
import Product from './components/pages/Product/Product';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';
import Carts from './components/pages/Carts/Carts';
import Sidebar from './components/Sidebar/Sidebar';
import { useState } from 'react';
import About from './components/pages/About/About';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  function toggle(){
    setIsOpen(!isOpen)
  }

  return (
    <div className="App">
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Anouncement/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/product' component={ProductList}/>
          <Route path='/products' component={Product}/>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
          <Route path='/carts' component={Carts}/>
          <Route path='/about' component={About}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
