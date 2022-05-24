import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const MyProfileModal = ({ setMyinfoModal, profile , refetch}) => {
    const {cuntry, education, linkedinProfile, number, streetAddress} = profile;
    // console.log(profile);
    const [user, loading] = useAuthState(auth);
    const handleInfoSave = (e) => {
        e.preventDefault()
        const profile = {
            email: user.email,
            name: user.displayName,
            education: `${e.target.education.value || education}`,
            streetAddress: `${e.target.streetAddress.value || streetAddress}`,
            cuntry: `${e.target.cuntry.value || cuntry}`,
            number: `${e.target.number.value || number}`,
            linkedinProfile: `${e.target.linkdedin.value || linkedinProfile}`
        }
        // console.log(profile);
        axiosPrivate.put(`http://localhost:5000/profile/${user?.email}`, profile)
            .then(data => {
                console.log(data.data);
                if ((data.data.matchedCount || data.data.upsertedCount) > 0) {
                    toast.success("Your profile is Updated")
                    setMyinfoModal(null)
                    refetch()
                }
            })

    }
    return (
        <div>
            <input type="checkbox" id="profile-modal" class="modal-toggle" />
            <div class="modal ">
                <div style={{ marginLeft: "100px" }} class="modal-box  h-[500px]  sm:h-[480px]">
                    <label for="profile-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <div className='w-11/12 '>
                        <div class="sm:mr-">
                            <div class="md:grid md:grid-cols-3 md:gap-6">
                                <div class="mt-5 md:mt-0 md:col-span-3">
                                    <form onSubmit={handleInfoSave}>
                                        <div class="shadow overflow-hidden sm:rounded-md">
                                            <div class="px-4 py-4 bg-gray-50 sm:px-6">
                                                <h3 class="text-lg leading-6 font-medium text-gray-900">Update Information</h3>
                                            </div>
                                            <div class="px-4 py-5 bg-white sm:p-6">
                                                <div class="grid grid-cols-6 gap-3">


                                                    <div class="col-span-6 sm:col-span-6">
                                                        <label for="education" class="block text-sm font-medium text-gray-700">Education</label>
                                                        <input type="text" name="education" id="education" autocomplete="family-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                                                        />
                                                    </div>


                                                    <div class="col-span-6 sm:col-span-3">
                                                        <label for="cuntry" class="block text-sm font-medium text-gray-700">Cuntry</label>
                                                        <input id="cuntry" name="cuntry"
                                                            type="text" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                                                        />
                                                    </div>
                                                    <div class="col-span-6 sm:col-span-3">
                                                        <label for="number" class="block text-sm font-medium text-gray-700">Number</label>
                                                        <input type={"number"} id="number" name="number" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        />
                                                    </div>

                                                    <div class="col-span-6">
                                                        <label for="street-address" class="block text-sm font-medium text-gray-700">Street address</label>
                                                        <input type="text" name="streetAddress" id="street-address" autocomplete="street-address" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                                    </div>
                                                    <div class="col-span-6">
                                                        <label for="linkdedin" class="block text-sm font-medium text-gray-700">Linkedin Profile Link</label>
                                                        <input type="text" name="linkdedin" id="linkdedin" autocomplete="linkdedin" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                <button

                                                    type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyProfileModal;