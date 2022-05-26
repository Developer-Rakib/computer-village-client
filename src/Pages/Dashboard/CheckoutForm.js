import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import axiosPrivate from '../../api/axiosPrivate';
import Loader from '../Shared/Loader';
import MiniLoader from '../Shared/MiniLoader';

const CheckoutForm = ({ order }) => {
    const [clientSecret, setClientSecret] = useState('')
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [proccesing, setProccesing] = useState(false)

    const stripe = useStripe();
    const elements = useElements();
    const { price } = order;
    // console.log(order);

    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })

    }, [])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setError(error.message)
        } else {
            setError("")
            // console.log('[PaymentMethod]', paymentMethod);
        }
        setSuccess("")
        setProccesing(true)
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: order?.customerName,
                        email: order?.customerEmail
                    },
                },
            },
        );
        if (intentError) {
            setProccesing(false)
            console.log(intentError);
            setError(intentError?.message)
            setProccesing(false)
        }
        else {
            setProccesing(false)
            console.log(paymentIntent);
            setSuccess(paymentIntent.id)
            setError("")

            const payment = {
                orderId: order?._id,
                transectionId: paymentIntent.id
            }
            axiosPrivate.patch(`http://localhost:5000/order/${order?._id}`, payment)
                .then(data => {
                    console.log(data.data);
                })


        }
    };
    // if (proccesing) {
    //     return <MiniLoader></MiniLoader>
    // }
    return (
        <div className='flex items-center border rounded w-8/12'>
            <form onSubmit={handleSubmit} className='sm:pl-16 sm:w-[400px] w-11/12 mx-auto sm:mx-0 text-left' >
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe || !clientSecret} style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class={`hover:bg-white  bg-primary mr-2 transition hover:text-primary rounded-full text-white border-2 border-primary px-6 text-sm sm:text-base sm:px-8 mt-5 py-1.5`}>
                    Pay
                </button>
                {
                    error && <p className="label-text-alt ml-2 mt-1 text-red-500">{error}</p>
                }
                {
                    success && <p className="label-text-alt ml-2 mt-1 text-green-600">Transection is Complete, Yor transection id is : <span className='text-orange-600 font-semibold'>{success}</span></p>
                }
            </form>


            {/* <form  className='sm:pl-16 sm:w-auto w-11/12 mx-auto sm:mx-0 text-left'>
                        <div class="relative z-0  w-full mb-6 group">
                            <input type="text" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required="" readOnly disabled value='' />
                            <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="email" name="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required="" readOnly disabled  />
                            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>



                        <div class="grid xl:grid-cols-2 xl:gap-6">
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="number" name="phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required="" />
                                <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                            </div>

                        </div>
                        <div className=' mb-3 sm:mb-0'>
                            <button
                                type='submit' style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class={`hover:bg-white  bg-primary mr-2 transition hover:text-primary rounded-full text-white border-2 border-primary px-6 text-sm sm:text-base sm:px-10 py-1.5 sm:py-2`}>Purchase</button>

                        </div>
                    </form> */}
        </div>
    );
};

export default CheckoutForm;