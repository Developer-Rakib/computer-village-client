import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import Loader from '../Shared/Loader';
import SocialLogin from './SocialLogin';

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const location = useLocation();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [token, setToken] = useToken(user)
    // console.log(token);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    let from = location.state?.from?.pathname || "/";



    // handle error 
    useEffect(() => {
        if (error || updateError) {
            console.log(error.code);
            console.log(updateError.code);
            switch (error.code) {
                case "auth/email-already-in-use":
                    toast.error('Email Aleady Exist!', { id: "signup" })
                    break;
                case "invalid-email":
                    toast.error('invalid-email!', { id: "signup" })
                    break;

                default:
                    toast.error('Somting is wrong', { id: "signup" })
                    break;
            }
        }
    }, [error, updateError])

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
            toast.success('Sign Up Successfully!', { id: "social_login" })
        }
    }, [ token, from, navigate])

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });

    }

    if (loading || updating) {
        return <Loader></Loader>;
    }
    return (
        <div className='mt-[64px] py-16  '>
            <div style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }} className='rounded-md w-11/12 sm:w-4/12 mx-auto py-14'>
                <h3 className="text-4xl  font-bold pb-5 text-center">Sign Up</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-9/12 mx-auto">

                    <input className='input input-bordered input-md my-0.5' placeholder='Name' {...register("name", {
                        required: {
                            value: true,
                            message: 'Name is Required'
                        }
                    })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>

                    <input className='input input-bordered input-md my-0.5' placeholder='Email'{...register("email", {
                        required: {
                            value: true,
                            message: 'Email is Required'
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Provide a valid Email'
                        }
                    })} />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>

                    <input className='input input-bordered input-md my-0.5' placeholder='Password' type="password" {...register("password", {
                        required: {
                            value: true,
                            message: 'Password is Required'
                        },
                        minLength: {
                            value: 6,
                            message: 'Must be 6 characters or longer'
                        }
                    })} />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>

                    <input
                     style={{fontFamily:'Open Sans, sans-serif', letterSpacing:'2px'}}  className='font-semibold bg-primary text-white border border-primary hover:bg-white hover:text-gray-700  transition-all cursor-pointer rounded-md py-3 ' value={"SIGN UP"} type="submit" />
                </form>
                <div className='w-9/12 mx-auto'>
                    <small className='mt-4 mx-2 inline-block'>Aleady Have Account ? <Link className='text-primary font-semibold' to={"/login"}>Log in</Link></small>
                    <div class="divider">OR</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;