import './App.css';
import Header from './Pages/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Home from './Pages/Home/Home';
import { Toaster } from 'react-hot-toast';
import Footer from './Pages/Shared/Footer';
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './Pages/Shared/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Toaster></Toaster>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/purchase' element={<RequireAuth><Purchase></Purchase></RequireAuth>} ></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/signUp' element={<SignUp></SignUp>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
