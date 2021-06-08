import '../styles/profileComponent.scss';
import ProfileComponent from '../components/profileComponent';
import userContext from './userContext';

import { firestore } from '../firebase';
import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

const Profile = () => {
  const { user } = useContext(userContext);
  console.log(user);
  const history = useHistory();
  const [userData, setUserData] = useState({
    username: '',
    birthday: '',
    number: '',
    icon: {
      url: 'https://www.blexar.com/avatar.png',
      scaledSize: { width: 50, height: 50 },
    },
  });

  useEffect(() => {
    if (user) {
      firestore
        .collection('users')
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setUserData(doc.data());
          } else {
            console.log('No such document!');
          }
        })
        .catch((error) => {
          console.log('Error getting document:', error);
        });
    }
  }, [user]);

  const writeData = () => {
    firestore
      .collection('users')
      .doc(user.uid)
      .set({
        username: userData.username,
        number: userData.number,
        icon: {
          url: userData.icon.url,
          scaledSize: userData.icon.scaledSize,
        },
      })
      .then(() => {
        history.push('/home');
      })
      .catch((error) => {
        console.error('Error writing document: ', error.message);
      });
  };
  const onInputChange = (event) => {
    const fieldName = event.target.name;

    setUserData((preData) => ({
      ...preData,
      [fieldName]: event.target.value,
    }));
  };

  return (
    <div className='container profileContainer'>
      <img className='circle' src={userData.icon.url} alt='Avatar' />
      <ProfileComponent
        icon='account_circle'
        placeholder='Fullname'
        className='validate'
        type='text'
        name='username'
        value={userData.username}
        onChange={onInputChange}
      />
      <ProfileComponent
        icon='local_phone'
        placeholder='Phone'
        className='validate'
        type='number'
        value={userData.number}
        name='number'
        onChange={onInputChange}
      />
      <button
        className='waves-effect waves-light btn center-align'
        onClick={writeData}
      >
        Save Profile
      </button>
    </div>
  );
};
export default Profile;
