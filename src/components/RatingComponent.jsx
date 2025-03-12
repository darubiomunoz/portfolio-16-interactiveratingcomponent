import React, { useContext } from 'react';
import iconStar from '../assets/images/icon-star.svg';
import { AppContext } from '../AppContext';
import '../styles/RatingComponent.css';

const RatingComponent = () => {
    const { 
        handleRating, 
        handleSubmit,
        rating
    } = useContext(AppContext);
    

    return (
        <div className="rating-container">
            <div className="rating-content">
                <div className='star-icon-container'>
                    <img src={iconStar} alt="Star Icon" className="star-icon" />
                </div>
                <h2>How did we do?</h2>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                <div className="rating-buttons">
                    {[1, 2, 3, 4, 5].map((rate) => (
                        <button key={rate} onClick={() => handleRating(rate)} className={rating === rate ? 'active' : ''}>
                            {rate}
                        </button>
                    ))}
                </div>
                <button onClick={handleSubmit} className="submit-button">SUBMIT</button>
            </div>
        </div>
    );
};

export { RatingComponent };