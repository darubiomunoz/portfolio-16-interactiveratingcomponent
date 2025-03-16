import React, { useState, createContext, useCallback } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [rating, setRating] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleRating = rate => {
        setRating(rate);
    }

    const handleSubmit = useCallback(() => {
        if (rating === null) {
            alert("Please rate the product before submitting.");
            return;
        }
        setSubmitted(!submitted);
    }, [rating, submitted]);

    return (
        <AppContext.Provider 
            value={{ rating, submitted, handleRating, handleSubmit }}
        >
            {children}
        </AppContext.Provider>  
    )
}
const MemoizedAppProvider = React.memo(AppProvider);

export { MemoizedAppProvider as AppProvider, AppContext };
