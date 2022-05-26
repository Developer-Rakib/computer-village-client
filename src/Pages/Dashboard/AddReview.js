import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Rating from 'react-rating';
import auth from '../../firebase.init';
import Loader from '../Shared/Loader';
import axiosPrivate from '../../api/axiosPrivate';


const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    let [user, loading, error] = useAuthState(auth)




    const onSubmit = data => {

        // console.log(data);
        const review = {
            name: data.name,
            review: data.Description,
            rating: data.rating,
            img: user?.photoURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-MOxuRwldA5D6vQQM5-Cje2zSAUESGvewA&usqp=CAU",
        }
        // console.log(review);
        axiosPrivate.post(`https://shielded-waters-86658.herokuapp.com/reviews`, review)
            .then(data => {
                console.log(data.data);
                if (data.data.insertedId) {
                    reset()
                    toast.success(`Your Review Succesfully Posted`)
                }
            })


    }
    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div className=''>
            <h2 className="text-3xl font-bold mb-5 border-b-4 inline-block pb-1 px-5 border-primary text-center">Add A Review</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-11/12 sm:w-7/12 mx-auto">

                <input className='input input-bordered input-md' placeholder='Name' {...register("name", {
                    required: {
                        value: true,
                        message: 'Name is Required'
                    }
                })} value={user.displayName} />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                </label>

                <input className='input input-bordered input-md' placeholder='Rating'
                    type={'number'}
                    {...register("rating", {
                        required: {
                            value: true,
                            message: 'Rating is Required'
                        },

                        maxLength: {
                            value: 1,
                            message: 'please enter 1 number of rating' // JS only: <p>error message</p> TS only support string
                        },
                        max: {
                            value: 5,
                            message: 'please rate 0 - 5' // JS only: <p>error message</p> TS only support string
                        }

                    })} />
                <label className="label">
                    {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                    {errors.rating?.type === 'max' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                    {errors.rating?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}

                </label>




                <textarea className='input h-32 input-bordered input-md' placeholder='Description' {...register("Description", {
                    required: {
                        value: true,
                        message: 'Description is Required'
                    }
                })} />
                <label className="label">
                    {errors.Description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Description.message}</span>}
                </label>

                <input
                    style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class="hover:bg-white transition w-40 mx-auto text-center bg-primary  hover:text-primary rounded-full text-white border-2 border-primary py-2" type={'submit'} value={'Post Review'} />
            </form>
        </div>
    );
};

export default AddReview;