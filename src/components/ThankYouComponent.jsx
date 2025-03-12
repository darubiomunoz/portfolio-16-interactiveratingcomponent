import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import "../styles/ThankYouComponent.css";

const ThankYouComponent = () => {
    const { rating } = useContext(AppContext);

    return (
        <div className="thank-you-content">
            <h2>Thank You!</h2>
            <p>You rated us {rating} out of 5.</p>
        </div>
    );
}

export { ThankYouComponent };
