import React from 'react';
import FooterPost from './FooterPost';
import HeaderPost from './HeaderPost';

const PostCard = ({photo}) => {
    return (
        <article className="flex flex-col w-full sm:w-[470px] min-h-[300px] mb-4 overflow-hidden border-solid border-1 border-gray rounded-md">
            <HeaderPost image="https://avatars.githubusercontent.com/u/73148751?v=4" userName="Angel Arceo" />
            <div className="pb-4">
                <img className="w-auto" src={photo} alt="photo" />
            </div>
            <FooterPost likes="284,123" />
        </article>
    )
}

export default PostCard;