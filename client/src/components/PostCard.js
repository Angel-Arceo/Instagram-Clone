import React from 'react';
import HeaderPost from './HeaderPost';

const PostCard = () => {
    return (
        <div className="w-full sm:w-[470px] min-h-[300px] mb-4 overflow-hidden border-solid border-1 border-gray rounded-md">
            <HeaderPost image="https://avatars.githubusercontent.com/u/73148751?v=4" userName="Angel Arceo" />
        </div>
    )
}

export default PostCard;