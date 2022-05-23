import React, { useState } from 'react';
import MyProfileModal from './MyProfileModal';

const MyProfile = () => {
    const [myInfo, setMyinfo] = useState(null)

    const info = {
        name: 'rakib',
        email: "tazulislam601@gmail.com"
    }
    return (
        <div className=''>
            <div class="bg-white w-11/12 mx-auto  shadow overflow-hidden sm:rounded-lg">
                <div class="px-4 py-4 sm:px-6">
                    <h3 class="text-2xl leading-6 font-medium text-primary">My Information</h3>
                    <p class="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                </div>
                <div class="border-t text-left border-gray-200">
                    <dl>
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Full name</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Margot Foster</dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Email address</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">margotfoster@example.com</dd>
                        </div>
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Number</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">+8801978870125</dd>
                        </div>
                        <div class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Street address</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Doulot put, chatkhil, noakhali, Bangladesh</dd>
                        </div>
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Linkedin</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">https://bd.linkedin.com</dd>
                        </div>

                    </dl>
                </div>
            </div>
            <div className='text-right mt-5 mr-3'>
                <label
                    onClick={() => setMyinfo(info)}
                    for="profile-modal"
                    style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class="hover:bg-primary transition hover:text-white rounded-full text-primary border-2 border-primary px-10 py-2">Update Profile</label>
            </div>

            {
                myInfo && <MyProfileModal
                style={{zIndex:'999'}} 
                setMyinfo={setMyinfo}></MyProfileModal>
            }




        </div>
    );
};

export default MyProfile;