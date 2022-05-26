import axios from 'axios';
import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import Loader from '../Shared/Loader';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [email, setEmail] = useState("")
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token, setToken] = useToken(user)
    // console.log(token);

    let from = location.state?.from?.pathname || "/";


    useEffect(() => {
        if (error) {
            console.log(error.code);
            switch (error.code) {
                case "auth/wrong-password":
                    toast.error('Password is Wrong!', { id: "signup" })
                    break;
                case "auth/too-many-requests":
                    toast.error('Too Many Requests!', { id: "signup" })
                    break;
                case "auth/user-not-found":
                    toast.error('User Not Available, Please Sign Up!', { id: "signup" })
                    break;

                default:
                    toast.error('Somting is wrong', { id: "login" })
                    break;
            }
        }
    }, [error])

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
            toast.success('Login Successfully!', { id: "social_login" })
        }
    }, [ token, from, navigate])

    if (loading) {
        return <Loader></Loader>;
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };
    const handleForgetPass = () => {

        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success('Mail Sent!', { id: "signup" })
            })
            .catch((error) => {
                console.log(error.code);
                const errorCode = error.code;

                if (errorCode === "auth/invalid-email") {
                    toast.error('This Email is not Valid!', { id: "signup" })

                }
                if (errorCode === "auth/missing-email") {
                    toast.error('Please Enter Email', { id: "signup" })

                }
                if (errorCode === "auth/user-not-found") {
                    toast.error('User not With This Email. Please SignUp', { id: "signup" })

                }
            });

    }
    return (
        <div className='mt-[64px] py-16  '>
        <div style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }} className='rounded-md w-11/12 sm:w-4/12 mx-auto py-14'>
            <h3 className="text-4xl font-bold pb-5 text-center">Login</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-9/12 mx-auto">


                <input
                    className='input input-bordered input-md my-0.5'
                    placeholder='Email'
                    {...register("email", {
                        required: {
                            value: true,
                            message: 'Email is Required'
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Provide a valid Email'
                        }
                    })}
                    onBlur={(e) => setEmail(e.target.value)}
                />
                <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                </label>

                <input
                    className='input input-bordered input-md my-0.5' placeholder='Password'
                    type="password"
                    {...register("password", {
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

                <input style={{fontFamily:'Open Sans, sans-serif', letterSpacing:'2px'}}  className='font-semibold bg-primary text-white border border-primary hover:bg-white hover:text-gray-700  transition-all cursor-pointer rounded-md py-3 ' value={"LOGIN"} type="submit" />
            </form>
            <div className='w-9/12 mx-auto'>
                <small className='mt-4 mx-2 inline-block'>New to Doctors Portal ? <Link className='text-primary font-semibold' to={"/signUp"}>Create new Account</Link></small>
                <small className='mx-2 inline-block'>Forget Password ? <button
                    className='text-primary font-semibold'
                    onClick={handleForgetPass}
                >Click Here</button></small>
                <div class="divider">OR</div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    </div>
    );
};

export default Login;