import React from "react";
import Form from "../components/Form/Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'


const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogin = (email, pass) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        dispatch(
          setUser({ email: user.email, token: user.accessToken, id: user.uid })
        );
        navigate('/')
      })
      .catch(console.error);
  };

  return (
    <div className="login_wrapper">
      <Form title="Войти" handleClick={handleLogin}></Form>
      <Link className="btn-simple" to='/signUp'>Или зарегестрироваться</Link>
    </div>
  );
};

export default LogIn;
