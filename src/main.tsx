// App
import App from './App';

// React router
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './app/store';

// Auth0
import { Auth0Provider } from '@auth0/auth0-react';
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
            redirect_uri: window.location.origin,
        }}
    >
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </Auth0Provider>
);
