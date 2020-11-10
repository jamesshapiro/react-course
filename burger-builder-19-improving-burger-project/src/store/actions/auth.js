import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDGe1-zpjc6vRSImvKIf_CZMfh1af2rCvk';
        if (!isSignUp) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDGe1-zpjc6vRSImvKIf_CZMfh1af2rCvk'
        }
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                console.log('EXPIRES IN:')
                console.log(response.data.expiresIn)

                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                console.log(expirationDate)
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.localId);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(err => {
                console.log(err)
                dispatch(authFail(err));
            });
    };
};

export const onSetAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.log('NO TOKEN')
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            console.log('exp date and new date')
            console.log(expirationDate)
            console.log(new Date())
            if (expirationDate < new Date()) {
                console.log('expired!')
                dispatch(logout());
            } else {
                console.log('not expired')
                const secondsUntilTimeout = Math.floor((expirationDate.getTime() - new Date().getTime()) / 1000)
                console.log('Seconds Until Timeout:', secondsUntilTimeout)
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout(secondsUntilTimeout))
            }
        }
    };
}