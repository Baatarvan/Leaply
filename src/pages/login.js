import '../styles/login.scss';

import { useState, useEffect } from 'react';
import firebase, { firestore, auth } from '../firebase';

const Login = () => {
  const [input, setInput] = useState('');
  const [confirmCode, setConfirmCode] = useState('');
  const [sentcode, setSentCode] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    //   'sign-in-button',
    //   {}
    // );
  }, []);

  const sendConfirmCode = async () => {
    setLoading(true);
    const appVerifier = window.recaptchaVerifier;
    console.log(appVerifier);
    try {
      window.confirmationResult = await auth.signInwithPhoneNumber(
        `976${input}`,
        appVerifier
      );
      setSentCode(true);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const login = async () => {
    try {
      const user = await window.confirmationResult.confirm(confirmCode);
      console.log(user);
    } catch (e) {
      console.log(e);
      alert('Буруу код');
    }
  };

  return (
    <div className='container loginContainer'>
      <div className='row header'>
        <h2>Leaply</h2>
        <h5 className='gap'>Please, login into your account</h5>
      </div>
      <div className='row'>
        <div className='col s12 m12'>
          <div className='card-panel grey lighten-4'>
            <div className='row'>
              <form className='col s12'>
                <div className='gap-top input-field col s12'>
                  <input
                    placeholder='Phone number'
                    type='number'
                    value={input}
                    onChange={(event) => {
                      setInput(event.target.value);
                    }}
                  />
                </div>
              </form>
            </div>
            <div className='row'>
              <form className='col s12'>
                <div className='input-field col s12'>
                  <input
                    placeholder='Pin'
                    type='text'
                    value={confirmCode}
                    onChange={(event) => {
                      setConfirmCode(event.target.value);
                    }}
                  />
                </div>
              </form>
            </div>

            <div className='row'>
              <p className='password right'>Forgot password?</p>
            </div>
            <div className='row valign-wrapper'>
              <a className='waves-effect waves-light btn'>button</a>
            </div>
          </div>
        </div>
        <p className='Create center'>Create account</p>
      </div>
    </div>
  );
};

export default Login;
