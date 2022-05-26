import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import Loader from '../Shared/Loader';
import MyProfileModal from './MyProfileModal';

const MyProfile = () => {
    const [myInfoModal, setMyinfoModal] = useState(null)
    const [user, loading] = useAuthState(auth);

    const { isLoading, error, data: profile, refetch } = useQuery('profile', () =>
        axiosPrivate.get(`https://shielded-waters-86658.herokuapp.com/profile/${user?.email}`)
    )
    // console.log(error);
    if (isLoading || loading) {
        return <Loader></Loader>
    }
    // console.log(profile.data);

    const { cuntry, education, linkedinProfile, number, streetAddress } = profile?.data

    return (
        <div className='pb-10 sm:py-0'>
            <div class="bg-white w-11/12 mx-auto  shadow overflow-hidden sm:rounded-lg">
                <div class="px-4 py-4 sm:px-6">
                    <h3 class="text-2xl leading-6 font-medium text-primary">My Information</h3>
                    <p class="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                </div>
                <div class="border-t text-left border-gray-200">
                    <dl>
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Full name</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.displayName}</dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Email address</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.email}</dd>
                        </div>
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Number</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{number}</dd>
                        </div>
                        <div class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Street address</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{streetAddress}, {cuntry}</dd>
                        </div>
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Education</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{education}</dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Linkedin</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{linkedinProfile}</dd>
                        </div>

                    </dl>
                </div>
            </div>
            <div className='text-center sm:text-right mt-5 mr-3'>
                <label
                    onClick={() => setMyinfoModal(true)}
                    for="profile-modal"
                    style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class="hover:bg-primary transition hover:text-white rounded-full text-primary border-2 border-primary px-10 py-2">{profile.data ? "Update Profile" : "Add Profile"}</label>
            </div>

            {
                myInfoModal && <MyProfileModal
                    refetch={refetch}
                    profile={profile?.data}
                    setMyinfoModal={setMyinfoModal}></MyProfileModal>
            }




        </div>
    );
};

export default MyProfile;