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
import MyOrder from './Pages/Dashboard/MyOrder';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddProduct from './Pages/Dashboard/AddParts';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import ManageProduct from './Pages/Dashboard/ManageParts';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import RequireAdmin from './Pages/Shared/RequireAdmin';
import RequireUser from './Pages/Shared/RequireUser';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Blogs from './Pages/Blogs/Blogs';
import Payment from './Pages/Dashboard/Payment';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Toaster></Toaster>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>} ></Route>
        <Route path='/payment/:id' element={<RequireAuth><Payment></Payment></RequireAuth>} ></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route path='myOrder' element={<RequireUser><MyOrder></MyOrder></RequireUser>} ></Route>
          <Route path='addReview' element={<RequireUser><AddReview></AddReview></RequireUser>} ></Route>
          <Route index element={<MyProfile></MyProfile>} ></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>} ></Route>
          <Route path='manageAllOrders' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>} ></Route>
          <Route path='manageProduct' element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>} ></Route>
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>} ></Route>
        </Route>
        <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>} ></Route>
        <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/signUp' element={<SignUp></SignUp>} ></Route>
        <Route path={'*'} element={<NotFound></NotFound>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
