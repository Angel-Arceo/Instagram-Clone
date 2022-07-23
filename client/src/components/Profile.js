import React from 'react';

const Profile = ({image, width, height}) => {
    const styles = `rounded-full overflow-hidden w-${width} h-${height} cursor-pointer`

    return (
        <>
            <div className={styles}>
                <img className="w-full" src={image} alt="Profile" />
            </div>
        </>
    )
}

export default Profile;