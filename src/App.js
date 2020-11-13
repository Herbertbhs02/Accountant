
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Services from './components/Services';
import Latestnews from './components/Latestnews';
import ContactUs from './components/ContactUs'
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
       <Switch>
         <Route  exact path='/' component={Home}/>
         <Route path='/AboutUs' component={AboutUs}/>
         <Route path='/Services' component={Services}/>
         <Route path='/Latestnews' component={Latestnews}/>
         <Route path='/ContactUs' component={ContactUs}/>
       </Switch>
       <Footer/>
    </div>
  </BrowserRouter>
 
  );
}

export default App;
