import App from './App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppProvider } from './AppContext';

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </StrictMode>
);
