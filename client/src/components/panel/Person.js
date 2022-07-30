import React from 'react';

const Person = ({profileUser, username}) => {

    return (
        <div className="flex flex-col">
            <img className="mx-3 rounded-full w-[60px] h-[60px] mt-px object-cover" src={profileUser} alt="a profile user" />
            <span className="font-rubik text-sm text-center">{username}</span>
        </div>
    )
}

export default Person;