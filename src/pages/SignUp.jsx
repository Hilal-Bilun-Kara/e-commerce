import { API } from "../api/api";
import Sign from "../assets/home/loginRegister/SignUp.png";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const initialForm = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  role_id: "3",
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
    formState: { errors },
  } = useForm({
    defaultValues: initialForm,
  });

  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const api = API();

  const fetchRoles = async () => {
    try {
      const response = await api.get("/roles");
      setRoles(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

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
          "You need to activate your account from the link sent to your e-mail address!",
          { position: "top-right" }
        );
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-col items-center ml-[20%] mt-[5%]"
      >
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
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>
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
              required: "Email field cannot be empty.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address.",
              },
            })}
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>
        <div className="flex flex-col mb-4">
          <label className="form-label">Password</label>
          <input
            id="examplePassword"
            placeholder="Enter your password "
            type={showPassword ? "text" : "password"}
            className="form-input"
            {...register("password", {
              required: "Password field cannot be empty.",
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
            className="absolute ml-[21%] sm:ml-[33%] md:ml-[20%] mt-[35px] flex items-center"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <FaEyeSlash className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
            ) : (
              <FaEye className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
            )}
          </button>
          {errors.password && (
            <p className="form-error">{errors.password.message}</p>
          )}
        </div>
        <div className="flex flex-col">
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
              },
              validate: (value) =>
                value !== watch("password") || "Passwords do not match.",
            })}
          />
          {errors.confirmPassword && (
            <p className="form-error">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/*Store Section*/}
        <label htmlFor="role_id">Choose your role</label>
        <select
          id="role_id"
          className="border ml-[1%] py-1 px-3 mt-[3%]"
          {...register("role_id")}
          value={watch("role_id") || initialForm.role_id}
        >
          {roles.map((item) => {
            return (
              <option value={item.id} id={item.id} key={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>

        {watch("role_id") === "3" && (
          <div className="flex flex-col">
            <label htmlFor="storeName">Store Name</label>
            <input
              type="text"
              id="storeName"
              className="store-input"
              {...register("store.name", {
                required: "Store name field cannot be empty.",
                minLength: {
                  value: 3,
                  message: "Store name must be at least 3 characters long.",
                },
              })}
            />
            {errors.store?.name && (
              <span className="text-red-500">{errors.store?.name.message}</span>
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
              <span className="text-red-500">
                {errors.store?.phone.message}
              </span>
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
            />
            {errors.store?.tax_no && (
              <span className="text-red-500">
                {errors.store?.tax_no.message}
              </span>
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
            />
            {errors.store?.bank_account && (
              <span className="text-red-500">
                {errors.store?.bank_account.message}
              </span>
            )}
          </div>
        )}

        <div className="flex flex-col justify-center text-center mb-[5%]">
          <button color="primary" className="button-signup">
            Sign In
          </button>
        </div>
      </form>
    </>
  );
}
