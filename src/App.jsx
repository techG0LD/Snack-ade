
import './App.css';
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom'
import Catalog from './components/Catalog';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
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
        </header>
        <main>
          <Routes>
            <Route path='/' />
            <Route path = '/catalog' element={<Catalog />}/>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
