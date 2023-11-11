
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Catalog from './components/Catalog';
import Navigation from './components/Header';
import Home from './components/Pages/Home';
import Error404 from './components/Pages/Error404';
import AboutUs from './components/Pages/AboutUs';
import Footer from './components/Footer';
import CurrentUserProvider from './contexts/CurrentUser'
import Product from './components/Pages/Product';
import AddSnack from './components/Pages/AddSnack';
import UpdateSnack from './components/Pages/Update';

function App() {
  return (
    <div className="App">
      <CurrentUserProvider>
      <Router>
        <Navigation/>
        {/* <header>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/catalog'>Catalog</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
          </ul>
        </header> */}
        <main>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>  
            <Route exact path = '/catalog' element={<Catalog />}/>
            <Route exact path='/about' element={<AboutUs />}></Route>
            
            <Route exact path='/snacks/:name' element={<Product />}></Route>
            <Route exact path='/addSnack' element={<AddSnack />}></Route>
            <Route exact path='/snacks/:name/update' element={<UpdateSnack />}></Route>
            {/* reads Routes top to bottom */}
            <Route path= '/:anything' element={<Error404/>} /> 
            <Route path= '/snacks/:anysnack' element={<Error404/>} />
          </Routes>
        </main>
        <Footer/>
      </Router>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
