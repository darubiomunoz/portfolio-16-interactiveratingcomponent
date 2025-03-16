import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import illustration from "../assets/images/illustration-thank-you.svg";
import "../styles/ThankYouComponent.css";

const ThankYouComponent = () => {
    const { rating } = useContext(AppContext);

    return (
        <div className="thankyou-container">
            <div className="thankyou-content">
                <div className='illustration-container'>
                    <img src={illustration} alt="Thank you illustration" className="illustration" />
                </div>
                <p className="score">You selected {rating} out of 5</p>
                <h2>Thank you!</h2>
                <p className="message">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            </div>
        </div>
    );
}

const MemoizedThankYouComponent = React.memo(ThankYouComponent);

export { MemoizedThankYouComponent as ThankYouComponent };
