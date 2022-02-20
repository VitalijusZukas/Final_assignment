import React from "react";
import { useRef } from "react";

const LoginForm = ({ setUser, getUser }) => {
  const nameRef = useRef();
  const pass1Ref = useRef();

  function loginUser() {
    const user = {
      email: nameRef.current.value,
      password: pass1Ref.current.value,
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    };

    fetch("http://localhost:4000/loginUser", options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser([...getUser, data.user]);
      });
  }

  return (
    <div>
      <input type="text" ref={nameRef} placeholder="name" />
      <input type="text" ref={pass1Ref} placeholder="password" />

      <button onClick={loginUser}>Login</button>
    </div>
  );
};

export default LoginForm;
