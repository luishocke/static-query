import { AuthBoxForm } from './styled';


import React from 'react';

export default function SignInForm({ signIn, message, text, state, setState }) {
  function handleInputChange(event) {
    event.persist();
    setState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <AuthBoxForm onSubmit={signIn}>
      <div className={'row'}>
        <label htmlFor={'emailInput'}>Email</label>
        <input
          id={'emailInput'}
          type={'email'}
          name={'email'}
          value={state.email}
          onChange={handleInputChange}
          required={true}
          autoFocus
        />
      </div>

      <div className={'row'}>
        <div className={'labelRow'}>
          <label htmlFor={'passwordInput'}>Password</label>

        </div>
        <input
          id={'passwordInput'}
          type={'password'}
          name={'password'}
          value={state.password}
          onChange={handleInputChange}
          required={true}
        />
      </div>

      <div className={'message'} style={{ display: message ? 'flex' : 'none' }}>

        {message}
      </div>

      <div className={'row'}>
        <button className={'signInButton'} type={'submit'}>
          {text.buttonText}
        </button>
      </div>
    </AuthBoxForm>
  );
}
