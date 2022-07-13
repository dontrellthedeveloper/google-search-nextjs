import React from 'react';

function Avatar({url}) {
    return (
        <img loading='lazy' className='h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110' src={url}/>
    );
}

export default Avatar;