import React from 'react';
import banner from '../../assets/image/banner-bg.jpg';

const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${banner})`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}} className='container mx-auto'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt suscipit labore, quasi tempore obcaecati perspiciatis illum voluptatem animi reiciendis architecto quos eligendi laborum sed doloremque recusandae fugit similique cupiditate! Corrupti rerum sed soluta deleniti similique, reprehenderit delectus aperiam, rem veritatis labore eius ut repellendus! Nisi eveniet cupiditate eius non deleniti.
        </div>
    );
};

export default Banner;