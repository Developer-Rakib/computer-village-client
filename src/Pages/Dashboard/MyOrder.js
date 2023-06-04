import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import Loader from '../Shared/Loader';
import Swal from 'sweetalert2'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';

const MyOrder = () => {
    // const [orders, setOrders] = useState([])
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate()

    const { isLoading, error, data: orders, refetch } = useQuery('orders', () =>
        axiosPrivate.get(`https://computer-village.onrender.com/orders/${user?.email}`)
    )

    // console.log(orders);
    if (isLoading || loading) {
        return <Loader></Loader>
    }


    const hnadleDelete = (id, name) => {
        console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Canceled Order!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPrivate.delete(`https://computer-village.onrender.com/order/${id}`)
                    .then(data => {
                        console.log(data.data);
                        if (data.data.deletedCount > 0) {
                            Swal.fire(
                                'Canceled!',
                                `${name} has been Canceled.`,
                                'success'
                            )
                            refetch()
                        }
                        else {
                            toast.error('Somthing is Wrong !')
                        }
                    })

            }
        })
    }


    return (
        <div className='sm:px-10 px-2 pb-5'>
            <h5 className="text-lg text-left font-bold  mb-2 text-primary">My Orders</h5>
            <div class="relative  overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-2  sm:py-3">

                            </th>
                            <th scope="col" class="py-2  sm:py-3">
                                Product Name
                            </th>
                            <th scope="col" class="py-2 text-center sm:py-3">
                                Total Price
                            </th>
                            <th scope="col" class="py-2 text-center sm:py-3">
                                Quanity
                            </th>
                            <th scope="col" class="py-2 w-40 text-center sm:py-3">
                                Payment
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.data.map((order, i) => {

                                return (
                                    <tr key={order._id} class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                        <th scope="row" class="pl-2 pr-0 sm:pr-0 sm:pl-5 py-2  sm:py-4 font-medium text-gray-900 dark:text-white whitespace-nowraptext-[13px]">
                                            {i + 1}
                                        </th>
                                        <td class="py-2 w-60  text-[13px] sm:py-4">
                                            {order.name.slice(0, 40)}
                                        </td>
                                        <td class="py-2 text-[13px]  text-center sm:py-4">
                                            {order.unitPrice}
                                        </td>
                                        <td class="py-2 text-[13px] text-center sm:py-4">
                                            {order.quanity}
                                        </td>
                                        <td class="py-2 text-[13px] text-center sm:py-4">
                                            {!order.paid ?
                                                <>
                                                    <button
                                                        onClick={() => hnadleDelete(order._id, order.name)}
                                                        className='btn mr-1 btn-xs bg-red-500 text-white border-none'>Cancel</button>
                                                    <button
                                                        onClick={() => navigate(`/payment/${order._id}`)}
                                                        className='btn btn-xs bg-success text-white border-none'>Pay</button>
                                                </>
                                                :
                                                <>
                                                    <p className='text-success'>Paid, Trans ID: </p>
                                                    <p className='text-success sm:w-auto w-40'>{order?.transectionId}</p>
                                                </>
                                            }
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrder;