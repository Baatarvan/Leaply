import '../styles/profileComponent.scss';

const profileComponent = (props) => {
  const { icon } = props;
  const { placeholder } = props;

  return (
    <div>
      <div className='row'>
        <form className='col s12'>
          <div className='icon col s1'>
            <i className='material-icons'>{icon}</i>
          </div>
          <div className='input-field col s11'>
            <input placeholder={placeholder} type='text' className='validate' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default profileComponent;
