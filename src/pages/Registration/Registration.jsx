import React from "react";
import "./Registration.css";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { registerUser } from "../../Reducer/AuthSlice";

const RegisterModal = ({ closeModal }) => {

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(registerUser(data)).then((res) => {
      if (res?.payload?.status_code === 201) {
        if (closeModal) closeModal();
      }
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <span className="close-btn" onClick={closeModal}>×</span>

        <h2>Register</h2>

        <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>

          {/* Username */}
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone"
            {...register("phone", { required: "Phone is required" })}
          />
          {errors.phone && <p className="error">{errors.phone.message}</p>}

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword.message}</p>
          )}

          <button type="submit">Create Account</button>

        </form>

      </div>
    </div>
  );
};

export default RegisterModal;