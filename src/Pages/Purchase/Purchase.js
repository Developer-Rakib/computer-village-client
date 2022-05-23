import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MdOutlineAddCircle } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loader from '../Shared/Loader';
import PurchaseModal from './PurchaseModal';

const Purchase = () => {
    const [user, loading] = useAuthState(auth);
    const [partDetail, setPartDetail] = useState(null)
    const parts = {
        name: "Deepcool Castle 240RGB V2 Liquid CPU Cooler",
        img: "https://www.computervillage.com.bd/uploads/products/photos/item_Deepcool-Castle-240RGB-V2-Liquid-CPU-Cooler-__1649832634.webp",
        "description": "The Deepcool Gamer Storm Castle 240RGB V2 Liquid CPU Cooler features an Anti-leak Tech Inside the liquid cooling system. The technology assists the system in achieving automated pressure balance, which significantly improves the operational safety of AIO liquid cooling systems. It has double window panes and immersive ambient lighting, allowing for a perfect display of aesthetic illumination. It has a 16.7M true colors flowing RGB system that can be easily synchronized and controlled by the wired controller included. The lighting system includes five built-in effects (dynamic, static, breathing, comet, and fashion collision) as well as 36 interchangeable lighting modes.",
        price: 110,
        minimumOrderQuanity: 12,
        availableQuanity: 36,
        stock: "stock"
    }
    // console.log(user);
    // const {id} = useParams()

    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div
            style={{ fontFamily: 'Merriweather' }}
            className='my-[64px]'
        >


            <div
                className="flex justify-evenly flex-col-reverse sm:flex-row pt-8 sm:pt-20 w-11/12 sm:container mx-auto">
                <div className="flex flex-col p-2 sm:p-5 sm:text-left text-center sm:mt-0 mt-3 md:flex-row md:w-8/12  rounded-lg bg-white shadow-lg">
                    <img className=" w-56 sm:mx-0 mx-auto sm:w-full  sm:h-96 md:h-auto object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg" src={'https://www.computervillage.com.bd/uploads/products/photos/item_Deepcool-Castle-240RGB-V2-Liquid-CPU-Cooler-__1649832634.webp'} alt="" />


                    <form className='pl-16'>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required="" readOnly disabled value={user.displayName} />
                            <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="email" name="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required="" readOnly disabled value={user.email} />
                            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>



                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required="" />
                            <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                        </div>
                        <div class="grid xl:grid-cols-2 xl:gap-6">
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required="" />
                                <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="number" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required="" />
                                <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Qunatity</label>
                            </div>
                        </div>
                        <div>
                            <button
                                disabled={parts.length === 0}
                                type='submit' style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class="hover:bg-white  bg-primary mr-2 transition hover:text-primary rounded-full text-white border-2 border-primary px-10 py-2">Purchase</button>

                            <label
                                onClick={() => setPartDetail(parts)}
                                for="purchase-modal"
                                style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class="hover:bg-primary transition hover:text-white rounded-full text-primary border-2 border-primary px-10 py-2">Details</label>
                        </div>
                    </form>
                    {
                        partDetail && <PurchaseModal
                            parts={parts}
                        ></PurchaseModal>
                    }

                </div>

            </div>







            {/* <div
             className="flex justify-evenly flex-col-reverse sm:flex-row pt-8 sm:pt-20 w-11/12 sm:container mx-auto">
                    <div className="flex flex-col p-2 sm:p-5 sm:text-left text-center sm:mt-0 mt-3 md:flex-row md:w-8/12  rounded-lg bg-white shadow-lg">
                        <img className=" w-52 sm:mx-0 mx-auto sm:w-full  sm:h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={'https://www.computervillage.com.bd/uploads/products/photos/item_Deepcool-Castle-240RGB-V2-Liquid-CPU-Cooler-__1649832634.webp'} alt="" />
                        <div className="py-6 pl-10  flex flex-col justify-start">
                            <h5 className="text-gray-900 text-3xl font-semibold mb-2">{'Gigabyte Geforce RTX 2060 SUPER WINDFORCE OC 8GB Graphics Card'}</h5>
                            <h3 className="text-2xl mb-2 font-semibold">${500}</h3>
                            <p 
                            style={{fontFamily:'Open Sans, sans-serif', letterSpacing:'1px'}} 
                            className="text-gray-700 text-sm pl-1 text-justify sm:text-left sm:text-base mb-2 sm:mb-4">{'The Deepcool Gamer Storm Castle 240RGB V2 Liquid CPU Cooler features an Anti-leak Tech Inside the liquid cooling system. The technology assists the system in achieving automated pressure balance, which significantly improves the operational safety of AIO liquid cooling systems. It has double window panes and immersive ambient lighting,'}</p>
                            <p> <strong>Stock</strong> : {20}</p>
                            <p> <strong>Minimum Order</strong> : {12}</p>
                            <div className='flex justify-between items-center mt-3 sm:pr-3'>
                            <button style={{fontFamily:'Open Sans, sans-serif', letterSpacing:'2px'}} class="hover:bg-white  bg-primary transition hover:text-primary rounded-full text-white border-2 border-primary px-10 py-2">Purchase</button>
                            </div>

                        </div>
                    </div>
                    
            </div> */}

        </div>
    );
};

export default Purchase;