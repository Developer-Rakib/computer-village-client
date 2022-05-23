import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    // const { isLoading, error, data: services } = useQuery('services', () =>
    //     axios.get('http://localhost:5000/services')
    // )

    const imgStorage_key = `337d76e7a5799a6aeebe82688b06e092`

    // if (isLoading) return <Loader></Loader>

    const onSubmit = async data => {
        console.log(data);
        // const img = data.img[0];
        // const formData = new FormData();
        // formData.append('image', img);
        // const url = `https://api.imgbb.com/1/upload?key=${imgStorage_key}`

        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         if (result.success) {
        //             // console.log(result);
        //             const imgUrl = result.data.url;
        //             const doctor = {
        //                 name: data.name,
        //                 email: data.email,
        //                 spiciality: data.spiciality,
        //                 img: imgUrl
        //             }
        //             console.log(doctor);
        //             axios.post(`http://localhost:5000/doctor`, doctor, {
        //                 headers: {
        //                     'authorization': `bearer ${localStorage.getItem('accessToken')}`
        //                 }
        //             })
        //                 .then(data => {
        //                     // console.log(data.data.success);
        //                     console.log(data);
        //                     if (data.data.success) {
        //                         toast.success(`${data.data.message}`)
        //                     }
        //                     else {
        //                         toast.success(`${data.data.message}`)

        //                     }

        //                 })

        //         }
        //     })

    }
    return (
        <div className=''>
            <h2 className="text-3xl font-bold mb-3 text-center">Add A Review</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-7/12 mx-auto">

                <input className='input input-bordered input-md' placeholder='Name' {...register("name", {
                    required: {
                        value: true,
                        message: 'Name is Required'
                    }
                })} />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                </label>

                <input className='input input-bordered input-md' placeholder='Rating' 
                type={'number'}
                    {...register("number", {
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
                    {errors.number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                    {errors.number?.type === 'max' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                    {errors.number?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                    
                </label>
                
                

                <input type={'file'} className='mt- ' {...register("img", {
                    required: {
                        value: true,
                        message: 'image is Required'
                    }
                })} />
                <label className="label">
                    {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                </label>


                <textarea className='input h-32 input-bordered input-md'  placeholder='Description' {...register("Description", {
                    required: {
                        value: true,
                        message: 'Description is Required'
                    }
                })} />
                <label className="label">
                    {errors.Description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Description.message}</span>}
                </label>




                <input className='font-semibold bg-primary border border-primary hover:bg-white text-white hover:text-primary transition cursor-pointer rounded-md mt-3 py-2.5 ' value={"Add Review"} type="submit" />
            </form>
        </div>
    );
};

export default AddReview;