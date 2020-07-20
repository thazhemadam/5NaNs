import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const Login = ({startLogin}) => (
    <div className='box-layout'>
        <div className="box-layout__box">
            <h1 className="box-layout__title">5NaNs</h1>
            <p className="box-layout__title">No more NaNs. <br/> Manage your finances and keep your numbers straight!<br/></p>
            
            
            <div className="google-btn" onClick={startLogin}>
                <div className="google-icon-wrapper">
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                </div>
                <p className="btn-text"><b>Sign in with Google</b></p>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);