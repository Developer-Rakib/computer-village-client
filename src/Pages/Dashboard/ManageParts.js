import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axiosPrivate from '../../api/axiosPrivate';
import Loader from '../Shared/Loader';

const ManageParts = () => {

    const { isLoading, error, data: parts, refetch } = useQuery('parts', () =>
        axiosPrivate.get('https://shielded-waters-86658.herokuapp.com/parts')
    )

    const hnadleDelete = (id, name) => {
        // console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPrivate.delete(`https://shielded-waters-86658.herokuapp.com/part/${id}`)
                    .then(data => {
                        // console.log(data.data);
                        if (data.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                `${name} has been Deleted.`,
                                'success'
                            )
                            refetch()
                        }
                        else {
                            toast.error('Somthing is Wrong !')
                        }
                    })

            }
        })
    }
    if (isLoading) {
        return <Loader></Loader>
    }
    // console.log(parts.data.availableQuanity);
    return (
        <div className='sm:px-10 px-2 pb-5'>
            <h5 className="text-lg text-left font-bold  mb-2 text-primary">Mange Product</h5>
            <div class="relative  overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-2  sm:py-3">

                            </th>
                            <th scope="col" class="py-2  sm:py-3">
                                Product Name
                            </th>
                            <th scope="col" class="py-2 text-center sm:py-3">
                                Price
                            </th>
                            <th scope="col" class="py-2 text-center sm:py-3">
                                Stock
                            </th>
                            <th scope="col" class="py-2 text-center sm:py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.data?.map((part, i) => {
                                // console.log(part.availableQuanity);

                                return (
                                    <tr key={part._id} class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                        <th scope="row" class="pl-3 pr-3 sm:pr-0 sm:pl-5 py-2  sm:py-4 font-medium text-gray-900 dark:text-white whitespace-nowraptext-[13px]">
                                            {i + 1}
                                        </th>
                                        <td class="py-2 w-60  text-[13px] sm:py-4">
                                            {part.name}
                                        </td>
                                        <td class="py-2 text-[13px]  text-center sm:py-4">
                                            ${part.price}
                                        </td>
                                        <td class="py-2 text-[13px] text-center sm:py-4">
                                            {part.availableQuanity}
                                        </td>
                                        <td class="py-2 text-[13px] text-center sm:py-4">
                                            <button
                                                onClick={() => hnadleDelete(part._id, part.name)}
                                                className='btn mr-1 btn-xs bg-red-500 text-white border-none'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageParts;