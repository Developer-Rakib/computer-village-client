import React from 'react';

const Skills = ({name, img}) => {
    return (
        <div className='border-2 rounded-lg w-36 m-5 cursor-pointer justify-center items-center h-32  flex flex-col'>
            <img className='w-16' src={img} alt="" />
            <h3 className="text-2xl">{name}</h3>
        </div>
    );
};

export default Skills;