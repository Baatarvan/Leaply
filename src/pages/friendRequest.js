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
          <div className='secondary-content'>
            <button className='waves-effect waves-light btn accept'>
              Accept
            </button>
            <button className='waves-effect waves-light btn reject'>
              Reject
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default friendRequest;
