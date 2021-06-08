import '../styles/profileComponent.scss';

const profileComponent = (props) => {
  const { icon, placeholder, className, name, type, value, onChange } = props;

  return (
    <div>
      <div className='row'>
        <form className='col s12'>
          <div className='icon col s1'>
            <i className='material-icons'>{icon}</i>
          </div>
          <div className='input-field col s11'>
            <input
              name={name}
              placeholder={placeholder}
              type={type}
              className={className}
              value={value}
              onChange={onChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default profileComponent;
