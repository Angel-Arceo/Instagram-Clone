import React from 'react';
import Icon from '../components/Icon'


const FooterPost = ({likes}) => {
    return (
        <div className="flex flex-col pb-2">
            <div className="w-28 flex justify-evenly ml-2 pb-3">
                <Icon name="like" fill="#262626" width="23" height="23" />
                <Icon name="comment" fill="#262626" width="23" height="23" />
            </div>
            <p className="ml-7 font-rubik text-sm text-tertiary-gray">{likes} Likes </p>
            
        </div>
    )
}

export default FooterPost;