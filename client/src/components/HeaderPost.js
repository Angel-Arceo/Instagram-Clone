import React from 'react';

const HeaderPost = ({image, userName}) => {
    return (
        <article className="flex w-full items-center h-[48px] border-solid border-b-1 border-gray">
            <div className="flex w-36 justify-evenly ml-4">
                <img className="rounded-full w-8 h-8 object-cover" src={image} alt="user profile" />
                <h3 className="font-rubik text-[15px] mt-2">{userName}</h3>
            </div>
        </article>
    )
}

export default HeaderPost;