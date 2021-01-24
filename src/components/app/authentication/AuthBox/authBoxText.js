import React from 'react';

export function AuthBoxText(mode) {
  console.log(mode);
  if (mode === 'register')
    return {
      authText: 'Create an Account',
      ssoText: 'or sign up with',
      buttonText: 'Sign Up',
      twitterButton: 'Sign up with Twitter',
      googleButton: 'Sign up with Google',
    };
  else
    return {
      authText: 'Welcome back',
      ssoText: 'or sign in with',
      buttonText: 'Sign In',
      twitterButton: 'Sign in with Twitter',
      googleButton: 'Sign in with Google',
    };
}
