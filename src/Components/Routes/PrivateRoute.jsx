import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { FallingLines, ThreeCircles } from 'react-loader-spinner';

const PrivateRoute = ({children}) => {
    const { user, loader } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    console.log('location',location)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loader || loading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <FallingLines
                    color="#A62F03"
                    width="100"
                    visible={true}
                    ariaLabel="falling-circles-loading"
                />
            </div>
        );
    }

    if (user) {
        return children;
    }
    
    return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoute;