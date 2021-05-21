import '../styles/friendRequest.scss';

const friendRequest = () => {
  return (
    <div className='container friendRequest'>
      <h4 className='title'>Friend Request</h4>
      <ul className='collection'>
        <li className='collection-item avatar'>
          <img
            src='https://www.blexar.com/avatar.png'
            alt=''
            className='circle'
          />
          <span className='title'>Fullname</span>
          <p>bio</p>
          <a href='#!' className='secondary-content'>
            <a className='waves-effect waves-light btn accept'>Accept</a>
            <a className='waves-effect waves-light btn reject'>Reject</a>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default friendRequest;
