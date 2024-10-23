import axios from 'axios';
import {LOGIN_GOOGLE_API} from '../../constants/api';

export const register = async userData => {
  const response = await axios.post('/api/auth/register', userData);
  return response.data;
};

export const googleLogin = async googleUserData => {
  const response = await axios.post(LOGIN_GOOGLE_API, googleUserData);
  return response.data;
};

export const signInWithGoogle = async () => {
  const {
    user: {idToken},
  } = await GoogleSignin.signIn();
  return {idToken};
};
