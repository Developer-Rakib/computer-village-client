import React, { useEffect, useState } from 'react';
import axiosPrivate from '../../api/axiosPrivate';
import { useQuery } from 'react-query'
import Loader from '../Shared/Loader';
import { Link } from 'react-router-dom';

const ManageAllOrders = () => {
    // const [orders, setOrders] = useState([])
    const { isLoading, error, data:orders } = useQuery('orders', () =>
        axiosPrivate.get("http://localhost:5000/orders")
            

    )
    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='sm:px-10 px-2 pb-5'>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-2  sm:py-3">

                            </th>
                            <th scope="col" class="py-2 sm:py-3">
                                Customer Name
                            </th>
                            <th scope="col" class="py-2  sm:py-3">
                                Product Name
                            </th>
                            <th scope="col" class="py-2  sm:py-3">
                                Unit Price
                            </th>
                            <th scope="col" class="py-2  sm:py-3">
                                Quanity
                            </th>
                            <th scope="col" class="py-2  sm:py-3">
                                Payment
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.data?.map((order, i) => {
                                return (
                                    <tr key={order._id} class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                        <th scope="row" class="pl-3 pr-3 sm:pr-0 sm:pl-5 py-2  sm:py-4 font-medium text-gray-900 dark:text-white whitespace-nowraptext-[13px]">
                                            {i + 1}
                                        </th>
                                        <td class="py-2 text-[13px] sm:py-4">
                                            {order.customerName}
                                        </td>
                                        <td class="py-2 text-[13px] sm:py-4">
                                            {order.name}
                                        </td>
                                        <td class="py-2 text-[13px]  sm:py-4">
                                            {order.unitPrice}
                                        </td>
                                        <td class="py-2 text-[13px]  sm:py-4">
                                            {order.quanity}
                                        </td>
                                        <td class="py-2 text-[13px]  sm:py-4">
                                            {!order.pay ?
                                                <>
                                                    <Link to={`/dashboard/payment/${order._id}`}><button className='btn mr-1 btn-xs bg-red-500 text-white border-none'>Cancel</button></Link>
                                                    <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs bg-success text-white border-none'>Pay</button></Link>
                                                </>
                                                :
                                                <p className='text-success'>Paid</p>
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

export default ManageAllOrders;