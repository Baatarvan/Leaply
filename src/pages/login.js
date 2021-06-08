import '../styles/login.scss';

import { useState, useEffect } from 'react';
import firebase, { auth, firestore } from '../firebase';
import { useHistory } from 'react-router-dom';

const Login = ({ user }) => {
  const [input, setInput] = useState('');
  const [confirmCode, setConfirmCode] = useState('');
  const [sentcode, setSentCode] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (user) {
      history.push('/home');
    }
  }, [user, history]);

  // Recapcha

  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'sign-in-button',
      {}
    );
  }, []);

  const sendConfirmCode = async () => {
    const appVerifier = window.recaptchaVerifier;
    try {
      window.confirmationResult = await auth.signInWithPhoneNumber(
        `+976 ${input}`,
        appVerifier
      );
      setSentCode(true);
    } catch (e) {
      console.log(e);
    }
  };

  const verification = async () => {
    try {
      const user = await window.confirmationResult.confirm(confirmCode);
      if (user) {
        firestore
          .collection('users')
          .doc(user.uid)
          .get()
          .then((profile) => {
            if (profile.data()) {
              history.push('/home');
            } else {
              history.push('/profile');
            }
          });
      }
      console.log(user);
    } catch (e) {
      alert('Нууц код буруу байна.');
    }
  };

  const phoneNumberComponent = () => {
    return (
      <>
        <div className='row'>
          <form className='col s12'>
            <div className='gap-top input-field col s12'>
              <input
                id='passwordNumber'
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
        <a id='sign-in-button' />
        <button
          className='waves-effect waves-light btn'
          onClick={sendConfirmCode}
        >
          Send code
        </button>
      </>
    );
  };

  const sendCodeComponent = () => {
    return (
      <div>
        <div className='row'>
          <div className='col s12'>
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
          </div>
        </div>
        <div className='row'></div>
        <div className='row valign-wrapper'>
          <button
            className='waves-effect waves-light btn'
            onClick={verification}
          >
            Login
          </button>
        </div>
      </div>
    );
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
            {sentcode ? sendCodeComponent() : phoneNumberComponent()}
          </div>
        </div>
        <p className='Create center'>Create account</p>
      </div>
    </div>
  );
};

export default Login;
