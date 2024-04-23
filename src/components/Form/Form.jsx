import React, { useState } from "react";
import './Form.scss'

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <form className="form">
      <input
        className="form_input"
        autoFocus
        type="email"
        placeholder="E-mail для регистрации"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="form_input"
        type="password"
        placeholder="Пароль"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <div className="form_btn btn" onClick={() => handleClick(email, pass)}>
        {title}
      </div>
    </form>
  );
};

export default Form;
