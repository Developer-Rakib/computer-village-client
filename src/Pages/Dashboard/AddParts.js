import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axiosPrivate from '../../api/axiosPrivate';

const AddParts = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imgStorage_key = `337d76e7a5799a6aeebe82688b06e092`
    const onSubmit = async data => {

        const img = data.img[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorage_key}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const imgUrl = result.data.url;
                    const part = {
                        name: data.name,
                        price: data.price,
                        description: data.description,
                        minimumOrderQuanity: data.minimunOrderQuantity,
                        availableQuanity: data.availableQuantity,
                        img: imgUrl
                    }
                    console.log(part);
                    axiosPrivate.post(`https://shielded-waters-86658.herokuapp.com/part`, part)
                        .then(data => {
                            // console.log(data.data.success);
                            // console.log(data.data);
                            if (data.data.success) {
                                toast.success(`${data.data.message}`)
                                reset()
                            }
                            else {
                                toast.success(`${data.data.message}`)

                            }

                        })

                }
            })

    }
    return (
        <div className='mb-5'>
            <h2 className="text-2xl sm:text-3xl font-bold mb-5 border-b-4 inline-block pb-1 px-5 border-primary text-center">Add A Parts</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-11/12 sm:w-7/12 mx-auto">

                <input className='input input-bordered input-md' placeholder='Name' {...register("name", {
                    required: {
                        value: true,
                        message: 'Name is Required'
                    }
                })} />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                </label>


                <div className='sm:flex  justify-between'>
                    <div className='sm:w-6/12 w-full'>
                        <input className='input input-bordered w-ful input-md sm:px-5' placeholder='Price'
                            type={'number'}
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is Required'
                                },

                            })} />
                        <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}

                        </label>
                    </div>
                    <div className='sm:w-6/12 w-full'>
                        <input className='input input-bordered input-md sm:px-5' placeholder='Available Quantity'
                            type={'number'}
                            {...register("availableQuantity", {
                                required: {
                                    value: true,
                                    message: 'Available Quantity is Required'
                                },

                            })} />
                        <label className="label">
                            {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}

                        </label>
                    </div>
                </div>

                <input className='input input-bordered input-md' placeholder='Minimum Order Quantity'
                    type={'number'}
                    {...register("minimunOrderQuantity", {
                        required: {
                            value: true,
                            message: 'Minimum Order Quantity is Required'
                        },

                    })} />
                <label className="label">
                    {errors.minimunOrderQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimunOrderQuantity.message}</span>}
                </label>
                <label className="label">
                    <span className="label-text">Select Image</span>

                </label>
                <input type={'file'} className='ml-1 ' {...register("img", {
                    required: {
                        value: true,
                        message: 'image is Required'
                    }
                })} />
                <label className="label">
                    {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                </label>


                <textarea className='input h-32 mt-2 input-bordered input-md' placeholder='Description' {...register("description", {
                    required: {
                        value: true,
                        message: 'Description is Required'
                    }
                })} />
                <label className="label">
                    {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                </label>



                <input
                    style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class="hover:bg-white transition w-40 mx-auto text-center bg-primary  hover:text-primary rounded-full text-white border-2 border-primary py-2" type={'submit'} value={'Add Parts'} />

            </form>
        </div>
    );
};

export default AddParts;