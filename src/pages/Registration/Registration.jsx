import React from "react";
import "./Registration.css";
import { useForm } from "react-hook-form";

const RegisterModal = ({ closeModal, openLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("REGISTER DATA:", data);

    // 👉 Call your API here

    // After successful registration:
    closeModal();
    openLogin(); // redirect to login
  };

  return (
    <div className="modal-overlay">
      <div className="modal-register">
        
        {/* Close Button */}
        <span className="close-btn" onClick={closeModal}>
          ×
        </span>

        <h2>Register</h2>

        {/* Form */}
        <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>

          <input
            type="text"
            placeholder="Full Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}

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
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}

          {/* Confirm Password */} 
          <input type="password" placeholder="Confirm Password" 
          {...register("confirmPassword", { required: "Confirm Password is required", validate: (value) => value === watch("password") || "Passwords do not match", })} 
          /> {errors.confirmPassword && ( <p className="error">
          {errors.confirmPassword.message}</p> )}

          <button type="submit">Register</button>
        </form>

        {/* Login Redirect */}
        <p className="login-link">
          Already have an account?
          <button
            onClick={() => {
              closeModal();   // close register
              openLogin();    // open login
            }}
          >
            <u>Login</u>
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterModal;