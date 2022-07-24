import React from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const Navbar = () => {
    
    return (
        <nav className="flex flex-row items-center justify-center gap-4 sticky top-0 left-0 w-full h-[55px] border-solid border-b-1 border-gray">
            <div className="flex flex-row justify-between">
                <h1 className="flex font-lobster text-2xl mr-8">Instagram</h1>
                <span className="hidden sm:flex invisible sm:visible">
                    <Search />
                </span>
                <ul className="flex flex-row items-center gap-4 md:gap-8">
                    <li>
                        <Link to="/">
                            <Icon name="home" fill="#262626" width="23" height="23" />
                        </Link>
                    </li>
                    <li className="visible sm:hidden sm:invisible">
                        <Link to="/">
                            <Icon name="search" width="26" height="26" strokeWidth="1.3" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Icon name="add" width="23" height="23" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img className='rounded-full w-6 h-6 object-cover' src='https://avatars.githubusercontent.com/u/73148751?v=4' alt="Profile" />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;