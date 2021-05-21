import '../styles/profileComponent.scss';
import ProfileComponent from '../components/profileComponent';

const profile = () => {
  return (
    <div className='container profileContainer'>
      <img
        className='circle'
        src='https://www.blexar.com/avatar.png'
        alt='Avatar'
      />
      <ProfileComponent icon='account_circle' placeholder='Fullname' />
      <ProfileComponent icon='date_range' placeholder='Birthday' />
      <ProfileComponent icon='local_phone' placeholder='Phone' />
      <ProfileComponent icon='email' placeholder='Email' />
      <ProfileComponent icon='security' placeholder='Password' />
      <a className='waves-effect waves-light btn center-align'>Save Profile</a>
    </div>
  );
};

export default profile;
