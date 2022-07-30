import React from 'react';
import FooterPost from './FooterPost';
import HeaderPost from './HeaderPost';

const PostCard = (props) => {
    const { photo, user } = props.postObj;

    return (
        <article className="flex flex-col w-full sm:w-[470px] min-h-[300px] mb-4 overflow-hidden border-solid border-1 border-gray rounded-md">
            <HeaderPost profileObj={user} />
            <div className="pb-4">
                <img className="w-auto" src={photo} alt="sorry for not displaying the image" />
            </div>
            <FooterPost postObj={props.postObj}/>
        </article>
    )
}

export default PostCard;