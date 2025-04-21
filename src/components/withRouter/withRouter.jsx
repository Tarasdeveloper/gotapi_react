import React from 'react';
import { useLocation, useHistory, useParams } from 'react-router-dom';

export function withRouter(Component) {
    return function Wrapper(props) {
        const location = useLocation();
        const navigate = useHistory();
        const params = useParams();
        return (
            <Component
                {...props}
                location={location}
                navigate={navigate}
                params={params}
            />
        );
    };
}
