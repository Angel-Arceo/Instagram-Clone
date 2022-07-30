import React from 'react';
import Comment from './Comment';

const Comments = ({comments}) => {

    return (
        <section className="flex justify-center p-7 pt-0">
            <div className="flex flex-col">
                {comments.map(comment => <Comment comment={comment} />)}
            </div>
        </section>
    )
}

export default Comments;