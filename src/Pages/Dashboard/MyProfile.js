import React from 'react';

const MyProfile = () => {
    return (
        <div className='flex flex-wrap justify-between'>
            <div class="bg-white w-11/12 sm:w-[49%]  shadow overflow-hidden sm:rounded-lg">
                <div class="px-4 py-4 sm:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">My Information</h3>
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


            <div className='w-11/12 sm:w-[49%]'>
                <div class="sm:mr-">

                    <div class="md:grid md:grid-cols-3 md:gap-6">
                        <div class="mt-5 md:mt-0 md:col-span-3">
                            <form action="#" method="POST">
                                <div class="shadow overflow-hidden sm:rounded-md">
                                    <div class="px-4 py-4 bg-gray-50 sm:px-6">
                                        <h3 class="text-lg leading-6 font-medium text-gray-900">Update Information</h3>
                                    </div>  
                                    <div class="px-4 py-5 bg-white sm:p-6">
                                        <div class="grid grid-cols-6 gap-3">


                                            <div class="col-span-6 sm:col-span-6">
                                                <label for="last-name" class="block text-sm font-medium text-gray-700">Name</label>
                                                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                            </div>

                                            <div class="col-span-6 sm:col-span-6">
                                                <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                                                <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                            </div>

                                            <div class="col-span-6 sm:col-span-3">
                                                <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
                                                <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                    <option>United States</option>
                                                    <option>Canada</option>
                                                    <option>Mexico</option>
                                                </select>
                                            </div>
                                            <div class="col-span-6 sm:col-span-3">
                                                <label for="number" class="block text-sm font-medium text-gray-700">Number</label>
                                                <input id="number" name="number" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>

                                            <div class="col-span-6">
                                                <label for="street-address" class="block text-sm font-medium text-gray-700">Street address</label>
                                                <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                            </div>
                                            <div class="col-span-6">
                                                <label for="street-address" class="block text-sm font-medium text-gray-700">Linkedin Profile Link</label>
                                                <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                            </div>

                                        </div>
                                    </div>
                                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;