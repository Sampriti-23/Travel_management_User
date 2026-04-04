import React from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { loginUser } from "../../Reducer/AuthSlice";

const Login = ({ closeModal }) => {

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(loginUser(data)).then((res) => {
      if (res?.payload?.status_code === 200) {
        closeModal();
      }
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <span className="close-btn" onClick={closeModal}>×</span>

        <h2>Login</h2>

        <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}

          <button type="submit">Login</button>

        </form>
        <p className="register-link"> Don't have an account? <button onClick={closeModal}><u>Register</u></button></p>
      </div>
    </div>
  );
};

export default Login;