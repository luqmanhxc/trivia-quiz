import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button
            className="btn btn--auth u-margin-bottom-small"
            onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
            }
        >
            Log Out
        </button>
    );
};

export default LogoutButton;
