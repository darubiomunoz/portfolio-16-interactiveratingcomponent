import React, { useContext } from 'react';
import './styles/App.css';
import { AppContext } from './AppContext';
import { RatingComponent } from './components/RatingComponent';
import { ThankYouComponent } from './components/ThankYouComponent';

const App = () => {
    const {
        submitted
    } = useContext(AppContext);

    return (
        <div className="App">
            {!submitted ? (
                <RatingComponent />
            ) : (
                <ThankYouComponent />
            )}
        </div>
    );
};

export default App;