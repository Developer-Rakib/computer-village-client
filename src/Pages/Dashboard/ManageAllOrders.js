import React, { useEffect, useState } from 'react';
import axiosPrivate from '../../api/axiosPrivate';
import { useQuery } from 'react-query'
import Loader from '../Shared/Loader';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const ManageAllOrders = () => {
    const { isLoading, error, data: orders, refetch } = useQuery('orders', () =>
        axiosPrivate.get("https://shielded-waters-86658.herokuapp.com/orders")


    )

    // console.log(orders);
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
                axiosPrivate.delete(`https://shielded-waters-86658.herokuapp.com/order/${id}`)
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
    const handleShip = (id, name) => {
        // console.log(name);


        axiosPrivate.put(`https://shielded-waters-86658.herokuapp.com/orderShip/${id}`)
            .then(data => {
                console.log(data.data);
                if (data?.data.acknowledged) {
                    toast.success(`${name} has been Successfully Shipped!`)
                    refetch()
                }
            }).catch(error => {
                console.log(error.response);

            })
    }
    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='sm:px-10 px-2 pb-5'>
            <h5 className="text-lg text-center sm:text-left font-bold  mb-2 text-primary">Mange All Orders</h5>
            <div class="relative  overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
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
                            <th scope="col" class="py-2 text-center sm:py-3">
                                Total Price
                            </th>
                            <th scope="col" class="py-2 text-center sm:py-3">
                                Status
                            </th>
                            <th scope="col" class="py-2 text-center sm:py-3">
                                Payment
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.data?.map((order, i) => {
                                return (
                                    <tr key={order._id} class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                        <th scope="row" class="pl-2 pr-1 sm:pr-0 sm:pl-5 py-2  sm:py-4 font-medium text-gray-900 dark:text-white whitespace-nowraptext-[13px]">
                                            {i + 1}
                                        </th>
                                        <td class="py-2 text-[12px] sm:text-[13px] sm:py-4">
                                            {order.customerName}
                                        </td>
                                        <td class="py-2 w-48  text-[12px] sm:text-[13px] sm:py-4">
                                            {order.name.slice(0, 50)}
                                        </td>
                                        <td class="py-2 text-[12px] sm:text-[13px]  text-center sm:py-4">
                                            ${order.unitPrice}
                                        </td>
                                        <td class="py-2 text-[12px] sm:text-[13px] text-center sm:py-4">

                                            {!order.paid &&

                                                <p className='text-red-500'>Unpaid</p>



                                            }
                                            {
                                                (!order.shipped && order.paid) && <p className='text-green-500'>Pending</p>
                                            }
                                            {
                                                order.shipped && <p className='text-green-700'>Paid</p>
                                            }

                                        </td>
                                        <td class="py-2 text-[12px] sm:text-[13px] text-center sm:py-4">
                                            {!order.paid &&

                                                <button
                                                    onClick={() => hnadleDelete(order._id, order.name)}
                                                    className='btn mr-1 btn-xs bg-red-500 text-white border-none'>Cancel</button>}



                                            {(!order.shipped && order.paid) && <button
                                                onClick={() => handleShip(order._id, order.name)}
                                                className='btn mr-1 btn-xs bg-red-500 text-white border-none'>Ship</button>
                                            }
                                            {
                                                order.shipped && <p className='text-green-700'>Sipped</p>
                                            }

                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default ManageAllOrders;