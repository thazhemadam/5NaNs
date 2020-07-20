import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({
                                isAuthenticated, 
                                component: Component,
                                ...remainingProps
                            }) => (
    <div>
        <Header />
        <Route  {...remainingProps} 
                component=  {(props) => (
                                        isAuthenticated ? (
                                            <Component {...props}/>
                                        ) : (
                                            <Redirect to='/' />
                                        )
                                    )
                            }
        />
    </div>
);

const mapStateToProps = (state) =>({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps, undefined)(PrivateRoute);