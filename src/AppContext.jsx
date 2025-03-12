import React, { useState, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [rating, setRating] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleRating = rate => {
        setRating(rate);
    }

    const handleSubmit = () => {
        setSubmitted(true);
    }

    return (
        <AppContext.Provider 
            value={{ rating, submitted, handleRating, handleSubmit }}
        >
            {children}
        </AppContext.Provider>  
    )
}

export { AppProvider, AppContext };
