
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Catalog from './components/Catalog';
import Navigation from './components/Header';
import Home from './components/Home';
import Error404 from './components/Error404';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import CurrentUserProvider from './contexts/CurrentUser'

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
            <Route path= '/:anything' element={<Error404/>} />
          </Routes>
        </main>
        <Footer/>
      </Router>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
