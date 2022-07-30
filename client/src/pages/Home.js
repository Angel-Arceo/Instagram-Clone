import React from 'react';
import Posts from '../components/Posts'
import Navbar from '../components/Navbar';
import Panel from '../components/panel/Panel';

const Home = () => {
    return (
        <>
            <Navbar />
            <main className="mt-0 sm:mt-8">
                <div className="flex justify-center">
                    <Panel />
                </div>
                <Posts />
            </main>
        </>
    )
}

export default Home;