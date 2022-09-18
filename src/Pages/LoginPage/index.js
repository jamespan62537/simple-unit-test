import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// Actions
import {
  setIsLoginAction,
  setUserNameAction,
} from "../../Store/Slice/userSlice";
// Component
import AfterLoginComponent from "../../Components/LoginPage/AfterLoginComponent";
import BeforeLoginComponent from "../../Components/LoginPage/BeforeLoginComponent";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { isLogin, userName } = useSelector((state) => state.userReducer);
  const [_userName, setUserName] = useState("");

  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleLogout = (e) => {
    setUserName("");
    dispatch(setIsLoginAction(false));
    dispatch(setUserNameAction(""));
  };

  return (
    <>
      {!isLogin ? (
        <div data-testid="unLogin">
          <BeforeLoginComponent
            userName={_userName}
            handleChangeUserName={handleChangeUserName}
          />
        </div>
      ) : (
        <div data-testid="login">
          <AfterLoginComponent
            userName={userName}
            handleLogout={handleLogout}
          />
        </div>
      )}
    </>
  );
};

export default LoginPage;
