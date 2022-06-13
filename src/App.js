import Navbar from './components/Navbar';
import Home from './components/Home';
import Post from './components/Posts';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './app.css';

function App() {

  
  ///
  const user = false;
  
    return (
      <div className="App">
        <BrowserRouter>
        
        <Navbar user={user} />
        <Routes>
          <Route path='/' element={<Home/>} />
          {/* <Route path='/login' 
          element={user ? <Navigate to='/'/> : <Login />}  
         />  */}
          <Route path='/post/:id' element={<Post/>} />
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;
  