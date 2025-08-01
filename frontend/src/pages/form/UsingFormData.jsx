import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const Regisiter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notify, setNotify] = useState({
    msg: "",
    success: false,
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (!notify.msg) return;
    if (notify.success) {
      toast.success(notify.msg);
    } else {
      toast.error(notify.msg);
    }
  }, [notify]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setNotify({ msg: "Registration Successfull", success: true });
      const formData = new FormData();
      formData.append("fullname", name);
      formData.append("email", email);
      formData.append("fullname", password);
      console.log(formData);
      formData.forEach((value,key)=>
        console.log(key,value)
      )
      setEmail("");
      setName("");
      setPassword("");
      setConfirmPassword("");
    } else {
      setNotify({
        msg: "Password and Confirm Password must be same",
        success: false,
      });

      // alert("Password and Confirm Password does not match");
      setEmail("");
      setName("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <>
      {name && <p>{name}</p>}
      <form onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <div>
          <label>Enter your name:</label>
          <input
            type="text"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Enter your Email:</label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Enter your Password:</label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Enter your Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            name="confirmpassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default Regisiter;
