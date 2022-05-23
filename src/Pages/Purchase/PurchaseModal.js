import React from 'react';

const PurchaseModal = ({ part }) => {
    // console.log(part);
    const {img, name, description, stock, price ,minimumOrderQuanity, availableQuanity} = part
    return (
        <div>
            <input type="checkbox" id="purchase-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box h-[500px]  sm:h-auto">
                    <label for="purchase-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div
                        className="flex justify-evenly flex-col-reverse sm:flex-row  w-full sm:container mx-auto">
                        <div className="flex flex-col p-2 sm:p-5 sm:text-left text-center sm:mt-0 mt-3 md:flex-row md:w-full  rounded-lg bg-white shadow-lg">

                            <div className="py-2 px-5 flex flex-col justify-start">
                                <h5 className="text-gray-900 text-xl font-semibold mb-2">{name}</h5>
                                <p
                                    style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '0.5px' }}
                                    className="text-gray-700 text-sm text-justify sm:text-left sm:text-sm mb-2 sm:mb-4">{description}</p>
                                <h3 className="text-2xl mb-2 font-semibold">${price}</h3>
                                <p> <strong>Stock</strong> : {availableQuanity}</p>
                                <p> <strong>Minimum Order Quantity</strong> : {minimumOrderQuanity}</p>
                                <div className='flex justify-between items-center mt-3 sm:pr-3'>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;