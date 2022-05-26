import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';

const Payment = () => {
    // const [order?.data, setOrder]= useState({})
    const {id}= useParams()
    const { isLoading, error, data: order, refetch } = useQuery('order', () =>
    axiosPrivate.get(`http://localhost:5000/order/${id}`)
)

    // useEffect(() => {
    //     axiosPrivate.get(`http://localhost:5000/order/${id}`)
    //         .then(data => {
    //             // console.log(data.data.minimumOrderQuanity);
    //             setOrder(data.data)
    //         })
    // }, [id])
    const handlePayment=()=>{

    }
    console.log(order);
    return (
        <div
            style={{ fontFamily: 'Merriweather' }}
            className='my-[64px]'>
            <div
                className="flex justify-evenly flex-col-reverse sm:flex-row pt-8 sm:pt-20 w-11/12 sm:container mx-auto">
                <div className="flex flex-col p-2 sm:p-10 sm:text-left text-center sm:mt-0 mt-3 md:flex-row md:w-8/12  rounded-lg bg-white shadow-lg">
                    <div className='w-11/12 mx-auto sm:mx-0 mb-10 sm:mb-0 sm:w-4/12 text-center'>
                        <h2 className=''>{order?.data.name}</h2>
                        <img className="w-56  sm:mx-0 mx-auto sm:w-full h-32 sm:h-96 md:h-48 object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg" src={order?.data.img} alt="" />
                        <h2 className=''>Order Quanity : {order?.data?.quanity}</h2>
                        <h2 className=''>Total Price : {order?.data?.price}</h2>
                    </div>


                    <form onSubmit={handlePayment} className='sm:pl-16 sm:w-auto w-11/12 mx-auto sm:mx-0 text-left'>
                        <div class="relative z-0  w-full mb-6 group">
                            <input type="text" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required="" readOnly disabled value={order?.data?.customerName} />
                            <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="email" name="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required="" readOnly disabled value={order?.data?.customerEmail} />
                            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>



                        {/* <div class="relative z-0 w-full mb-6 group">
                            <input type="text" name="address" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                            <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                        </div> */}
                        <div class="grid xl:grid-cols-2 xl:gap-6">
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="number" name="phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required="" />
                                <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                            </div>
                            {/* <div class="relative z-0 w-full mb-6 group">
                                <input onChange={handleQuantity} type="number" name="quanity" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required value={quanity == null ? minimumOrderQuanity : quanity} />
                                <label className="label">
                                    { quanityError && <span className="label-text-alt text-red-500">{quanityError}</span>}
                                </label>
                                <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Qunatity</label>

                            </div> */}

                        </div>
                        <div className=' mb-3 sm:mb-0'>
                            <button
                                type='submit' style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class={`hover:bg-white  bg-primary mr-2 transition hover:text-primary rounded-full text-white border-2 border-primary px-6 text-sm sm:text-base sm:px-10 py-1.5 sm:py-2`}>Purchase</button>

                            {/* <label
                                for="purchase-modal"
                                style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class="hover:bg-primary transition hover:text-white rounded-full text-primary border-2 border-primary  px-6 text-sm sm:text-base sm:px-10 py-1.5 sm:py-2">Details</label> */}
                        </div>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Payment;