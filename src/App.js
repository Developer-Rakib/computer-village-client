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
import MyOrder from './Pages/Dashboard/MyOrder';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddProduct from './Pages/Dashboard/AddParts';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import ManageProduct from './Pages/Dashboard/ManageParts';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Toaster></Toaster>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>} ></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyOrder></MyOrder>} ></Route>
          <Route path='addReview' element={<AddReview></AddReview>} ></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>} ></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>} ></Route>
          <Route path='manageAllOrders' element={<ManageAllOrders></ManageAllOrders>} ></Route>
          <Route path='manageProduct' element={<ManageProduct></ManageProduct>} ></Route>
          <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>} ></Route>
        </Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/signUp' element={<SignUp></SignUp>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
