import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loader from '../Shared/Loader';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user);
    // console.log(admin);
    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div className='mt-[66px]'>
            <div class="drawer drawer-mobile mt-[64px] Container">
                <input id="dashboard-drower" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h3 className="text-2xl text-center sm:text-left sm:px-10 pb-3 pt-5 text-purple-500 font-bold">Dashboard</h3>
                    {/* <!-- Page content here --> */}
                    <Outlet />
                </div>
                <div style={{}} class="drawer-side">
                    <label for="dashboard-drower" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}

                        <li><Link className='border my-1' to={"/dashboard"}>My Profile</Link></li>
                        {
                            admin ?
                                <>
                                    <li><Link className='border my-1' to={"/dashboard/manageAllOrders"}>Manage All Orders</Link></li>
                                    <li><Link className='border my-1' to={"/dashboard/addProduct"}>Add a Product</Link></li>
                                    <li><Link className='border my-1' to={"/dashboard/manageProduct"}>Manage Product</Link></li>
                                    <li><Link className='border my-1' to={"/dashboard/makeAdmin"}>Make Admin</Link></li>
                                </>
                                :
                                <>
                                    <li><Link className='border my-1' to={"/dashboard/myOrder"}>My Order</Link></li>
                                    <li><Link className='border  my-1' to={"/dashboard/addReview"}>Add a  Review</Link></li>
                                </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;