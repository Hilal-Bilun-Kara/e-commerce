import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { userLogin } from "../store/actions/clientAction";

const initialFormData = {
  email: "",
  password: "",
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialFormData,
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (formData) => {
    dispatch(userLogin(formData, navigate));
    console.log("Login Data:", formData);
  };

  return (
    <>
      <ToastContainer />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-col items-center ml-[30%] mt-[5%]"
      >
        <div className="flex flex-col mb-4">
          <label htmlFor="email " className="form-label">
            Email
          </label>
          <input
            id="exampleEmail"
            className="form-input"
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: "Email field can not be empty.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address.",
              },
            })}
          />
          {errors.email && (
            <span className="form-error">{errors.email.message}</span>
          )}{" "}
          <label className="form-label">Password</label>
          <input
            id="examplePassword"
            placeholder="Enter your password "
            type={showPassword ? "text" : "password"}
            className="form-input"
            {...register("password", {
              required: "Password field can not be empty.",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long.",
              },
            })}
          />
          <button
            type="button"
            className="absolute ml-[19%] sm:ml-[42%] md:ml-[45%] mt-[8%] sm:mt-[22%] md:mt-[14%] flex items-center"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <FaEye className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
            ) : (
              <FaEyeSlash className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
            )}
          </button>
          {errors.password && (
            <span className="form-error">{errors.password.message}</span>
          )}
          <div className="flex w-full mt-4">
            <input
              type="checkbox"
              className="mr-2"
              id="rememberMe"
              {...register("rememberMe")}
            ></input>
            <label htmlFor="rememberMe"> Remember me?</label>
          </div>
          <div className="flex flex-col justify-center text-center ">
            <button color="primary" className={"button-signup"}>
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
