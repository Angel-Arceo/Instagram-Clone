import React, { useState } from 'react';

const Search = ({onSearch}) => {
    const [ value, setValue ] = useState('')

    const onChange = (e) => {
        setValue(e.target.value);
        onSearch(value);
    }

    return (
        <>
            <span className="flex items-center justify-center w-1/3 h-8 bg-secondary-gray rounded-l-md">
                <svg aria-label="Search" color="#8e8e8e" fill="#8e8e8e" width="16" height="16" role="img" viewBox="0 0 24 24"><path d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg>
            </span>
            <input onChange={onChange} className="font-rubik text-base w-56 h-8 bg-secondary-gray rounded-r-md mr-8 outline-none" type="Search" placeholder="Search.." />
        </>
    );
}

export default Search;