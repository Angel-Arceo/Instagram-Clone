import React from 'react';

const HeaderPost = ({image, userName}) => {
    return (
        <div className="flex w-full items-center h-[60px] border-solid border-b-1 border-gray">
            <div className="flex w-36 justify-evenly ml-4">
                <img className="rounded-full w-[28px] h-[28px] mt-px object-cover" src={image} alt="user profile" />
                <h3 className="font-rubik text-[15px] mt-2">{userName}</h3>
            </div>
        </div>
    )
}

export default HeaderPost;