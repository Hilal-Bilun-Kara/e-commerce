import { axiosInstance } from "../api/api";
import Sign from "../assets/home/loginRegister/SignUp.png";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../components/LoadingSpinner";
import { useNavigate } from "react-router-dom";

const initialForm = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  id: "3",
  store: {
    name: "",
    phone: "",
    tax_no: "",
    bank_account: "",
  },
};

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: initialForm,
  });

  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const api = axiosInstance();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await api.get("/roles");
        setRoles(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };
    fetchRoles();
  }, []);

  useEffect(() => {
    setValue("id", "3");
  }, [setValue]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    delete data.confirmPassword;
    setLoading(true);
    api
      .post("/signup", data)
      .then((res) => {
        toast.success(
          "🦄 You need to click link in email to activate your account!",
          {
            position: "top-right",
          }
        );
        setLoading(false);
        //Önceki sayfaya yönlendir.
        setTimeout(() => navigate(-1), 5000);
      })
      .catch((err) => {
        console.log("Error:", err);
        setLoading(false);
        toast.error(
          "An error occurred while submitting the form. Please try again.",
          { position: "top-right" }
        );
      });
    console.log(data);
  };

  <div className="flex justify-center text-center mb-[5%]">
    <img src={Sign} />
  </div>;

  return (
    <>
      <ToastContainer />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-col items-center ml-[30%] mt-[5%]"
      >
        {watch("id") !== "2" && (
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              id="name"
              className="form-input"
              placeholder="Enter your full name"
              type="text"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
            />
            {errors.name && (
              <span className="form-error">{errors.name.message}</span>
            )}

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
            )}

            <label className="form-label">Password</label>
            <input
              id="examplePassword"
              placeholder="Enter your password "
              type={showPassword ? "text" : "password"}
              className="form-input"
              {...register("password", {
                required: "Password field can not be empty.",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long.",
                },
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                  message:
                    "Password must contain at least one lowercase letter, one uppercase letter, and one number.",
                },
              })}
            />

            <button
              type="button"
              className="absolute ml-[19%] sm:ml-[42%] md:ml-[43%] mt-44 flex items-center"
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

            <label className="form-label">Password Validation</label>
            <input
              id="exampleConfirmPassword"
              placeholder="Reenter your password "
              type="password"
              className="form-input"
              {...register("confirmPassword", {
                required: "Please confirm your password.",
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                  message: "Passwords must much",
                },
                validate: (value) =>
                  value === watch("password") || "Passwords do not match.",
              })}
            />
            {errors.confirmPassword && (
              <span className="form-error">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
        )}

        {/*Store Section*/}
        <label htmlFor="id">Choose your role</label>
        <select
          id="id"
          className="border ml-[1%] py-1 px-3 mt-[3%]"
          {...register("id")}
          value={watch("id") || initialForm.id}
          onChange={(e) => setValue("id", e.target.value)}
        >
          {roles.map((item) => {
            return (
              <option
                value={item.id}
                id={item.id}
                key={item.id}
                className="text-black"
              >
                {item.name}
              </option>
            );
          })}
        </select>

        {watch("id") === "2" && (
          <div className="flex flex-col">
            <label htmlFor="storeName">Store Name</label>
            <input
              type="text"
              id="storeName"
              className="store-input"
              {...register("store.name", {
                required: "Store name field can not be empty.",
                minLength: {
                  value: 3,
                  message: "Store name must be at least 3 characters long.",
                },
              })}
            />
            {errors.store?.name && (
              <span className="form-error">{errors.store?.name.message}</span>
            )}
            <label htmlFor="storePhone">Store Phone</label>
            <input
              type="text"
              id="storePhone"
              className="store-input"
              {...register("store.phone", {
                required: "Store phone number is required.",
                pattern: {
                  value: /^[0-9]{10}$/, // Turkey phone numbers
                  message:
                    "Invalid phone number. Example: +90-XXX-XXX-XX-XX or 0XXXXXXXXXX",
                },
              })}
            />
            {errors.store?.phone && (
              <span className="form-error">{errors.store?.phone.message}</span>
            )}

            <label htmlFor="store.tax">Store Tax ID</label>
            <input
              type="text"
              id="storeTax"
              className="store-input"
              {...register("store.tax_no", {
                required: "Tax ID is required.",
                pattern: {
                  value: /^T\d{4}V\d{6}$/, // Assuming the pattern "TXXXXVXXXXXX"
                  message:
                    "Invalid tax ID format. Tax No in the format 'TXXXXVXXXXXX'",
                },
              })}
              maxLength={12}
            />
            {errors.store?.tax_no && (
              <span className="form-error">{errors.store?.tax_no.message}</span>
            )}

            <label htmlFor="storeIban">Store Bank Acoount</label>
            <input
              type="text"
              id="storeIban"
              className="store-input"
              {...register("store.bank_account", {
                required: "IBAN is required.",
                pattern: {
                  value: /^TR\d{2}\d{4}\d{4}\d{4}\d{4}\d{4}\d{2}$/, //IBAN format for Turkey
                  message: "Invalid IBAN format.",
                },
              })}
              maxLength={26}
            />
            {errors.store?.bank_account && (
              <span className="form-error">
                {errors.store?.bank_account.message}
              </span>
            )}
          </div>
        )}

        <div className="flex flex-col justify-center text-center mb-[5%]">
          <button
            color="primary"
            className={`button-signup ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Submit
          </button>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            onClick={onSubmit}
            className="py-5 mr-[25%] sm:mr-[45%] rounded-md bg-buttonblue text-white font-bold"
            disabled={loading}
          >
            {loading ? <LoadingSpinner /> : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
}
