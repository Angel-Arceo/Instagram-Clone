import React from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';
import Profile from './Profile';
import Icon from './Icon';

const Navbar = () => {
    //ml-12 sm:ml-28 lg:ml-52
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
                            <Icon name="home" fill="#262626" width="24" height="24" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Icon name="search" width="27" height="27" strokeWidth="1.3" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Icon name="add" width="24" height="24" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Profile width="6" height="6" image="https://avatars.githubusercontent.com/u/73148751?v=4"/>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;