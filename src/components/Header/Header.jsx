import { removeUser } from "../../store/userSlice";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const Header = () => {
  const dispatch = useDispatch();
  const isAuth = () => {
    const { email } = useSelector((state) => state.user);
    return !!email;
  };
  
  return (
    <header className="header">
      <h1>TODO List</h1>
      {isAuth() && <div className="logOut_btn" onClick={() => dispatch(removeUser())}>Выйти</div>}
    </header>
  );
};

export default Header;
