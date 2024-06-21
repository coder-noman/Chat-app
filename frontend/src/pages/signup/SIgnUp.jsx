// STARTER CODE FOR THE SIGNUP COMPONENT
import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SIgnUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
	setInputs({ ...inputs, gender });
};
  const handleSubmit = async (e) => {
	e.preventDefault();
	console.log(inputs)
	await signup(inputs);
};
  return (
    <div className="flex flex-col items-center justify-center md:min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md  bg-purple-700 border-2 border-black ">
        <h1 className="text-3xl font-semibold text-center text-white border-b pb-4">
          Register
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full input input-bordered  h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-white">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

          <Link
            className="text-sm block text-center hover:underline text-white hover:text-blue-600 mt-2 "
            to="/login"
          >
            Already have an account?
          </Link>

          <div className="text-center">
            <button className="btn btn-block sm:w-20 md:w-28 md:text-xl mt-2 font-bold"disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SIgnUp;
