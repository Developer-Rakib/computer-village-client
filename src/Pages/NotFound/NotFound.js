import React from 'react';

const NotFound = () => {
    return (
        <div className='h-[100vh] flex justify-center items-center '>
        <div>
            <h1 className="text-7xl sm:text-9xl font-semibold">404</h1>
            <h4 className="text-2xl sm:text-4xl font-medium my-1">Not Found</h4>
            <p className='mx-auto sm:text-base sm:w-full text-sm  w-10/12 '>This resource requested could not be found on this server!</p>
        </div>
    </div>
    );
};

export default NotFound;