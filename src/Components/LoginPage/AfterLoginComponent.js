import PropTypes from "prop-types";

const propTypes = {
  userName: PropTypes.string,
  handleLogout: PropTypes.func,
};

const defaultProps = {
  userName: "",
  handleLogout: () => {},
};

const AfterLoginComponent = ({ userName, handleLogout }) => {
  return (
    <>
      <p data-testid='greeting-text'>Welcome {userName}</p>
      <button data-testid='logout-button' onClick={handleLogout}>Logout</button>
    </>
  );
};

AfterLoginComponent.propTypes = propTypes;
AfterLoginComponent.defaultProps = defaultProps;

export default AfterLoginComponent;
