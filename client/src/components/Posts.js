import React, { useState } from 'react';
import PostCard from './post/PostCard';

const Posts = () => {
    const [ posts, setPost ] = useState([{
        _id: 1,
        photo: 'https://www.soyfutbol.com/__export/1652104252795/sites/debate/img/2022/05/09/erling_haaland_city.jpg_423682103.jpg',
        content: 'When controlling the flow of text, using the CSS property will cause the text inside the element to wrap normally While using the property will wrap the element to prevent the text inside from extending beyond its parent. Lastly, using the property will put the element on its own line and fill its parent.',
        likes: 113323,
        user: {
            profile: 'https://avatars.githubusercontent.com/u/104275026?s=120&v=4',
            username: 'angel.arceo',
            name: 'Angel Arceo' 
        },
        comments: [{
            content: 'When controlling the flow of text, using the CSS property will cause the text inside the element to wrap normally. While using the property will wrap the element to prevent the text inside from extending beyond its parent. Lastly, using the property will put the element on its own line and fill its parent.',
            likes: 113,
            user: {
                profile: 'https://avatars.githubusercontent.com/u/104275026?s=120&v=4',
                username: 'angel.arceo',
                name: 'Angel Arceo' 
            },
        }]
    }])

    return (
        <section className="flex justify-center mt-px">
            <div className="flex flex-col">
                {
                    posts.map(post => <PostCard key={post._id} postObj={post} />)
                }
            </div>
        </section>
    );
}

export default Posts;