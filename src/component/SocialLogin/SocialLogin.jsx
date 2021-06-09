import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialLogin.css';
const SocialLogin = (props) => {
    const {loginWith,name,icon,bgColor} =props;
  return (
    <div>
      <button className='icon-btn w-75 mx-auto d-block my-2 py-2 rounded-pill' onClick={loginWith}>
            <span className="icon" style={{backgroundColor:bgColor}}>
                <FontAwesomeIcon icon={icon} />
            </span>
            Continue with {name}
          </button>
    </div>
  );
};

export default SocialLogin;
