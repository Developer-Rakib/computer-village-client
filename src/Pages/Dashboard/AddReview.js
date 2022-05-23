import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loader from '../Shared/Loader';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    let [user, loading, error] = useAuthState(auth)
    // console.log(user);
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
    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div className=''>
            <h2 className="text-3xl font-bold mb-5 border-b-4 inline-block pb-1 px-5 border-primary text-center">Add A Review</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-7/12 mx-auto">

                <input className='input input-bordered input-md' placeholder='Name' {...register("name", {
                    required: {
                        value: true,
                        message: 'Name is Required'
                    }
                })}  value={user.displayName}/>
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
                
                
{/* 
                <input type={'file'} className='mt- ' {...register("img", {
                    required: {
                        value: true,
                        message: 'image is Required'
                    }
                })} />
                <label className="label">
                    {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                </label> */}


                <textarea className='input h-32 input-bordered input-md'  placeholder='Description' {...register("Description", {
                    required: {
                        value: true,
                        message: 'Description is Required'
                    }
                })} />
                <label className="label">
                    {errors.Description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Description.message}</span>}
                </label>




                <input
                    style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class="hover:bg-white transition w-40 mx-auto text-center bg-primary  hover:text-primary rounded-full text-white border-2 border-primary py-2" type={'submit'} value={'Add Review'} />
            </form>
        </div>
    );
};

export default AddReview;