import React from 'react';
import { useHistory } from 'react-router-dom';

import '../styles/home.scss';

const Home = () => {
  const history = useHistory();

  return (
    <div className='home'>
      <img
        className='circle pulse'
        src='https://www.blexar.com/avatar.png'
        alt='Avatar'
      />
      <div className='fixed'>
        <a class='btn-floating btn-large waves-effect waves-light'>
          <i
            className='material-icons'
            id='friendRequest'
            onClick={() => {
              history.push('/friendRequest');
            }}
          >
            assignment_ind
          </i>
        </a>
        <a class='btn-floating btn-large waves-effect waves-light'>
          <i className='material-icons' id='add'>
            add_circle_outline
          </i>
        </a>
        <a
          onClick={() => {
            history.push('/profile');
          }}
          class='btn-floating btn-large waves-effect waves-light'
        >
          <i className='material-icons' id='profile'>
            account_circle
          </i>
        </a>
      </div>
    </div>
  );
};

export default Home;
