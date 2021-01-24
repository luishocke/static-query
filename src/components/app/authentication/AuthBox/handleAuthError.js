
export default function handleAuthError(error, setMessage, setShaking) {
  const errorCode = error.code;
  const errorMessage = error.message;

  setShaking(true);
  switch (errorCode) {
    case 'auth/unauthorized-domain': {
      setMessage(
        "It seems you're visiting this application from an unknown domain. Please " +
          'contact me ' +
         ""
      );
      return;
    }
    case 'auth/wrong-password': {
      setMessage('Wrong Email or Password');
      return;
    }
    case 'auth/user-not-found': {
      setMessage('Wrong Email or Password');
      return;
    }
    case 'auth/network-request-failed': {
      setMessage('Could not connect. Check your internet connection');
      return;
    }
    case 'auth/too-many-requests': {

      setMessage('Too many requests');
      return;
    }
    case 'auth/user-disabled': {
      setMessage(
        'Your account was disabled. If you have no idea why, contact me :)'
      );
      return;
    }
    case 'auth/web-storage-unsupported': {
      setMessage(
        'Your browser does nut support local storage or you deactivated it.'
      );
      return;
    }
    case 'auth/email-already-in-use': {
      console.log(error);
      setMessage('The email is already in use. Please sign in instead.');
      return;
    }
    case 'auth/weak-password': {
      setMessage(error.message);
      return;
    }
    default: {

      console.log(error);
      setMessage('An unknown error occurred.');
      return;
    }
  }
}
