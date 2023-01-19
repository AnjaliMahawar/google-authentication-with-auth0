import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './Login';
import './style.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-jqg4e5cztw2p77o8.us.auth0.com"
  clientId="pL9LoY3GWVAAsPTaPPe8vqCEl7zOVffh"
  redirectUri={window.location.origin}
>
  <App />
</Auth0Provider>,
);
