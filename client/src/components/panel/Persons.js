import React from 'react';
import Person from './Person';
import { Link } from 'react-router-dom';

const Persons = ({persons}) => {
    return (
        <div className="flex justify-center mx-2 overflow-x-auto">
            {
            persons.map(person => 
            <Link to="/">
                <Person key={person.id} profileUser={person.profile} username={person.username} />
            </Link>)
            }
        </div>
    );
}

export default Persons;