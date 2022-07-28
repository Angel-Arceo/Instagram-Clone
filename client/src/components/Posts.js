import React from 'react';
import PostCard from './PostCard';

const Posts = () => {
    return (
        <section className="flex justify-center mt-12">
            <div className="flex flex-col">
                <PostCard photo="https://www.soyfutbol.com/__export/1652104252795/sites/debate/img/2022/05/09/erling_haaland_city.jpg_423682103.jpg" />
                <PostCard photo="https://www.soyfutbol.com/__export/1652104252795/sites/debate/img/2022/05/09/erling_haaland_city.jpg_423682103.jpg" />
            </div>
        </section>
    );
}

export default Posts;