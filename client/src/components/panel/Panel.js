import React, { useState } from 'react';
import Persons from './Persons';

const Panel = () => {
    const [ persons, setPersons ] = useState([
        {
            profile: 'https://avatars.githubusercontent.com/u/104275026?s=120&v=4',
            username: 'leomessi',
            _id: 13123213
        },
        {
            profile: 'https://avatars.githubusercontent.com/u/104275026?s=120&v=4',
            username: 'natgeo',
            _id: 12323
        },
        {
            profile: 'https://avatars.githubusercontent.com/u/104275026?s=120&v=4',
            username: 'galo',
            _id: 22123
        }
    ]);

    return (
        <article className="flex flex-row items-center w-full sm:w-[470px] h-[119px] mb-4 overflow-hidden border-solid border-1 border-gray rounded-md">
            <Persons persons={persons} />
        </article>
    );
}

export default Panel;