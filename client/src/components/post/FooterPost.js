import React from 'react';
import Icon from '../Icon'
import { Link } from 'react-router-dom';


const FooterPost = (props) => {
    const { user, content, likes, comments } = props.postObj;

    return (
        <div className="flex flex-col pb-2">
            <div className="w-28 flex justify-evenly ml-2 pb-3">
                <Icon name="like" fill="#262626" width="23" height="23" />
                <Icon name="comment" fill="#262626" width="23" height="23" />
            </div>
            <p className="ml-7 font-rubik text-sm text-tertiary-gray pb-2">{likes} Likes </p>
            
            {/*description*/}
            <div className="flex p-7 pt-0 pb-2">
                <p className="font-rubik text-sm font-normal"><span className="font-rubik text-sm font-semibold mr-px">{user.username}</span> {content}</p> 
            </div>


            <Link to="/">
                <p className="font-rubik text-sm text-[#a0a0a0] ml-7 pb-4">See the <span>{comments.length}</span> comments</p>
            </Link>

            <span className="font-rubik text-[13px] text-tertiary-gray ml-7 pb-2">instagram-clone</span>
        </div>
    )
}

export default FooterPost;