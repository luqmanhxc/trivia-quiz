import { withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';
import Loader from './Loader';

interface Props {
    component: React.FC<any>;
}

const AuthenticationGuard: React.FC<Props> = ({ component }) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => (
            <div className="page-layout">
                <Loader />
            </div>
        ),
    });

    return <Component />;
};

export default AuthenticationGuard;
