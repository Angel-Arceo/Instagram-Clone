import React from 'react';

const Comment = ({comment}) => {
    return (
        <article className="flex pb-2">
            <p className="font-rubik text-sm"><span className="font-rubik text-sm font-semibold mr-px">{comment.user.username}</span> {comment.content}</p> 
        </article>
    )
}

export default Comment;