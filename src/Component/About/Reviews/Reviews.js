import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Review from './Review';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('./reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className='bg-slate-300 py-20'>

            <Slider {...settings}>
                {
                    reviews.map(review => <Review
                        key={review.name}
                        review={review}
                    ></Review>)
                }
            </Slider>

        </div>
    );
};

export default Reviews;