import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch,useSelector } from "react-redux";
import { AddData } from "../../features/form/formSclice";
const Regisiter = () => {
  const dispatch = useDispatch();
  const [allinputs, setAllInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [notify, setNotify] = useState({
    msg: "",
    success: false,
  });

  useEffect(() => {
    if (!notify.msg) return;
    if (notify.success) {
      toast.success(notify.msg);
    } else {
      toast.error(notify.msg);
    }
  }, [notify]);

  const handleChandge = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAllInputs({ ...allinputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (allinputs.password === allinputs.confirmPassword) {
      setSubmittedData(allinputs);
      dispatch(AddData(allinputs));
      setAllInputs({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setNotify({ msg: "Registration Successfull", success: true });
    } else {
      setNotify({
        msg: "Password and Confirm Password must be same",
        success: false,
      });

      // alert("Password and Confirm Password does not match");
    }
  };

  return (
    <>
   
      <form onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <div>
          <label>Enter your name:</label>
          <input
            type="text"
            value={allinputs.name}
            name="name"
            onChange={handleChandge}
          />
        </div>
        <div>
          <label>Enter your Email:</label>
          <input
            type="email"
            value={allinputs.email}
            name="email"
            onChange={handleChandge}
          />
        </div>
        <div>
          <label>Enter your Password:</label>
          <input
            type="password"
            value={allinputs.password}
            name="password"
            onChange={handleChandge}
          />
        </div>
        <div>
          <label>Enter your Confirm Password:</label>
          <input
            type="password"
            value={allinputs.confirmPassword}
            name="confirmPassword"
            onChange={handleChandge}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {/* {submittedData && (
        <ul>
          <li>{submittedData.name}</li>
          <li>{submittedData.email}</li>
          <li>{submittedData.password}</li>
        </ul>
      )} */}
    </>
  );
};

export default Regisiter;
