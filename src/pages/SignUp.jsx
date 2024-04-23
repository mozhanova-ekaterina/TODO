import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";
import { setUser } from "../store/userSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, pass) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        dispatch(
          setUser({ email: user.email, token: user.accessToken, id: user.uid })
        );
        navigate("/");
      })
      .catch(console.error);
  };

  return (
    <div className="signUp_wrapper">
      <Form title="Регистрация" handleClick={handleRegister}></Form>
      <Link className="btn-simple" to="/login">
        Или войти
      </Link>
    </div>
  );
};

export default SignUp;
