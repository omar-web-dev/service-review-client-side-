import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import MyReviewsCard from './MyReviewsCard';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    const userEmail = user?.email
    
    useEffect(() => {
        fetch(`https://essium.vercel.app/reviews-email?email=${userEmail}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])
    return (
        <div>
            {reviews.map(rw => <MyReviewsCard reviews={reviews} setReviews={setReviews} rw={rw} key={rw._id} />)}
        </div>
    );
};

export default MyReview;