
import React from 'react';

export default function RegisterForm({
  register,
  message,
  text,
  state,
  setState,
  validatePassword,
}) {
  function handleInputChange(event) {
    event.persist();
    setState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div onSubmit={register}>
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

      <div className={'row'}>
        <div className={'labelRow'}>
          <label htmlFor={'confirmPasswordInput'}>Confirm Password</label>
        </div>
        <input
          id={'confirmPasswordInput'}
          type={'password'}
          name={'confirmPassword'}
          value={state.confirmPassword}
          onChange={event => {
            handleInputChange(event);
            validatePassword(event);
          }}
          required={true}
        />
      </div>

      <div className={'message'} style={{ display: message ? 'flex' : 'none' }}>
        <div />
        {message}
      </div>

      <div className={'row'}>
        <button className={'signInButton'} type={'submit'}>
          {text.buttonText}
        </button>
      </div>
    </div>
  );
}
