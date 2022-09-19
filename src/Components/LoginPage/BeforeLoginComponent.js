import PropTypes from "prop-types";
// Redux
import { useDispatch } from "react-redux";
// Actions
import {
  setIsLoginAction,
  setUserNameAction,
} from "../../Store/Slice/userSlice";

const propTypes = {
  userName: PropTypes.string,
  handleChangeUserName: PropTypes.func,
};

const defaultProps = {
  userName: "",
  handleChangeUserName: () => {},
};

const BeforeLoginComponent = ({ userName, handleChangeUserName }) => {
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(setIsLoginAction(true));
      dispatch(setUserNameAction(userName));
    }
  };

  return (
    <>
      <p>Please Enter Your User Name</p>
      <input
        data-testid="input-username"
        type="text"
        value={userName}
        onChange={handleChangeUserName}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

BeforeLoginComponent.propTypes = propTypes;
BeforeLoginComponent.defaultProps = defaultProps;

export default BeforeLoginComponent;
