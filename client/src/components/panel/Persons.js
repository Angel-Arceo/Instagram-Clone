import React from 'react';
import Person from './Person';

const Persons = ({persons}) => {
    return (
        <div className="flex justify-center mx-2 overflow-x-auto">
            {persons.map(person => <Person key={person.id} profileUser={person.profile} username={person.username} />)}
        </div>
    );
}

export default Persons;