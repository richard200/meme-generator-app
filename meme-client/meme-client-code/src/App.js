import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Login from './components/Login';
import { BrowserRouter } from 'react-router-dom';
import SignUp from './components/Signup';

function App() {
  return (
    <div style={{ 
      backgroundImage: `url("https://raw.githubusercontent.com/Zackazt/MemeCreator/master/src/bg.jpg")` 
    }} className="App">
      <h1 className='header'>Memes </h1>
      <BrowserRouter>
      <Display/>
     {/* <Login/> */}
     {/* <SignUp/> */}
      </BrowserRouter>
   
    </div>
  );
}

export default App;
