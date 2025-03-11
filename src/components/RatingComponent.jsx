import React, { useState } from 'react';
import iconStar from '../assets/images/icon-star.svg';

const RatingComponent = () => {
    const [rating, setRating] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleRating = (rate) => {
        setRating(rate);
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };

    return (
        <div className="rating-container">
            {!submitted ? (
                <div className="rating-content">
                    <img src={iconStar} alt="Star Icon" className="star-icon" />
                    <h2>How did we do?</h2>
                    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                    <div className="rating-buttons">
                        {[1, 2, 3, 4, 5].map((rate) => (
                            <button key={rate} onClick={() => handleRating(rate)} className={rating === rate ? 'active' : ''}>
                                {rate}
                            </button>
                        ))}
                    </div>
                    <button onClick={handleSubmit} className="submit-button">Submit</button>
                </div>
            ) : (
                <div className="thank-you-content">
                    <h2>Thank You!</h2>
                    <p>You rated us {rating} out of 5.</p>
                </div>
            )}
        </div>
    );
};

export { RatingComponent };