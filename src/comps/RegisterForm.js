import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const nameRef = useRef();
  const pass1Ref = useRef();
  const pass2Ref = useRef();

  function registerUser() {
    const user = {
      email: nameRef.current.value,
      passwordOne: pass1Ref.current.value,
      passwordTwo: pass2Ref.current.value,
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    };

    fetch("http://localhost:4000/registerUser", options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div>
      <input type="text" ref={nameRef} placeholder="email" />
      <input type="text" ref={pass1Ref} placeholder="password One" />
      <input type="text" ref={pass2Ref} placeholder="password Two" />
      <button onClick={registerUser}>Register</button>
    </div>
  );
};

export default RegisterForm;
