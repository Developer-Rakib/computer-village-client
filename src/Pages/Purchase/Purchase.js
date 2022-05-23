import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import {  useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loader from '../Shared/Loader';
import PurchaseModal from './PurchaseModal';

const Purchase = () => {
    const [partDetail, setPartDetail] = useState(null)
    const [part, setPart] = useState({})
    const [quanity, setQuantity] = useState(null)
    const [quanityError, setQuantityError] = useState(null)
    const [loadingg, setLoadingg] = useState(true)
    const { id } = useParams()
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        axios.get(`http://localhost:5000/part/${id}`)
            .then(data => {
                // console.log(data.data.minimumOrderQuanity);
                setPart(data.data)
                setQuantity(data.data.quanity)
                setLoadingg(false)
            })
    }, [id])


    if (loading || loadingg) {
        return <Loader></Loader>
    }

    const { img, name, price, minimumOrderQuanity, availableQuanity } = part;
    // console.log(part);
    const handlePurchase = (event) => {
        event.preventDefault();
        const quanity = event.target.quanity.value;
        const unitPrice = quanity * price;
        const purchaseInfo = {
            customerName: user.displayName,
            customerEmail: user.email,
            customerPhone: event.target.phone.value,
            customerAddress: event.target.address.value,
            unitPrice,
            price,
            quanity,
            img,
        }
        // console.log(purchaseInfo);
        axios.post("http://localhost:5000/orders", purchaseInfo)
        .then(data =>{
            if (data.data.insertedId) {
                toast.success(`${name} Order Succssfully!`)
                event.target.reset()
            }
            else{
                toast.error(`Somthing is Wrong`)

            }
        })
    }
    const handleQuantity = (e) => {
        setQuantity(e.target.value)
        if (e.target.value < minimumOrderQuanity) {
            setQuantityError(`You Have to Purchase Atlest ${minimumOrderQuanity} Products`)
            return
        }
        if (e.target.value > availableQuanity) {
            setQuantityError('Please Order Less Then Available Stock!')
            return
        }
        setQuantityError(null)
    }

// console.log(quanityError);
    return (
        <div
            style={{ fontFamily: 'Merriweather' }}
            className='my-[64px]'>
            <div
                className="flex justify-evenly flex-col-reverse sm:flex-row pt-8 sm:pt-20 w-11/12 sm:container mx-auto">
                <div className="flex flex-col p-2 sm:p-10 sm:text-left text-center sm:mt-0 mt-3 md:flex-row md:w-8/12  rounded-lg bg-white shadow-lg">
                    <div className='w-4/12 text-center'>
                        <h2 className=''>{name}</h2>
                        <img className="w-56  sm:mx-0 mx-auto sm:w-full  sm:h-96 md:h-48 object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg" src={img} alt="" />
                        <h2 className=''>Minimum Order Quanity : {minimumOrderQuanity}</h2>
                        <h2 className=''>Stock : {availableQuanity}</h2>
                    </div>


                    <form onSubmit={handlePurchase} className='pl-16'>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required="" readOnly disabled value={user.displayName} />
                            <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="email" name="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required="" readOnly disabled value={user.email} />
                            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>



                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" name="address" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                            <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                        </div>
                        <div class="grid xl:grid-cols-2 xl:gap-6">
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="number" name="phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required="" />
                                <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input onChange={handleQuantity} type="number" name="quanity" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required value={quanity == null ? minimumOrderQuanity : quanity} />
                                <label className="label">
                                    { quanityError && <span className="label-text-alt text-red-500">{quanityError}</span>}
                                </label>
                                <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Qunatity</label>

                            </div>

                        </div>
                        <div className='flex justify-center'>
                            <button
                                disabled={(quanity < minimumOrderQuanity || quanity > availableQuanity) && true}
                                type='submit' style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class={(quanity < minimumOrderQuanity || quanity > availableQuanity) ? `bg-gray-400 text-white rounded-full px-10 py-2 mr-2` : `hover:bg-white  bg-primary mr-2 transition hover:text-primary rounded-full text-white border-2 border-primary px-10 py-2`}>Purchase</button>

                            <label
                                onClick={() => setPartDetail(true)}
                                for="purchase-modal"
                                style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class="hover:bg-primary transition hover:text-white rounded-full text-primary border-2 border-primary px-10 py-2">Details</label>
                        </div>
                    </form>
                    {
                        partDetail && <PurchaseModal
                            part={part}
                        ></PurchaseModal>
                    }

                </div>

            </div>
        </div>
    );
};

export default Purchase;