
// import React, { useState } from "react";
// import {  Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// function SignUp() {
// // const navigate = useNavigate();

// let [full_name, setFullName] = useState("")
//   let [email, SetEmail] = useState("");
//   let [password, SetPassword] = useState("");

// const handleSignUp = (e) => {
//   e.preventDefault();

//   fetch("http://localhost:9292/auth/register", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },

//     body: JSON.stringify({
//       full_name: full_name,
//       email: email,
//       password: password,
//     }),
//   }).then((response) => {
//     if (response.ok) {
//       response.json().then((data) => {
//         setFullName(full_name)
//         SetEmail(email)
//         SetPassword(password)
//         // navigate("/");
//       });
//     } else {
//       console.log("error");
//     }
//   });
// };

// return (
//   <form id="form-signup" onSubmit={(e) => handleSignUp(e)}>
//     <div className="form-group mt-2">
//       <i className="input-icon uil uil-at"></i>
//       <input
//         type="text"
//         name="full_name"
//         id="full_name"
//         className="form-style"
//         placeholder="Full Name"
//         autoComplete="off"
//         onChange={(e) =>
//           setFullName({ full_name: e.target.value })
//         }
//       />
//     </div>
//     <div className="form-group mt-2">
//       <i className="input-icon uil uil-at"></i>
//       <input
//         type="text"
//         name="email"
//         id="email"
//         className="form-style"
//         placeholder="Email"
//         autoComplete="off"
//         onChange={(e) =>
//           SetEmail({  email: e.target.value })
//         }
//       />
//     </div>
//     {/* <div className="form-group mt-2">
//       <i className="input-icon uil uil-at"></i>
//       <input
//         type="email"
//         name="logemail"
//         className="form-style"
//         placeholder="Your Email"
//         id="logemail"
//         autoComplete="off"
//         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//       />
//     </div> */}
//     <div className="form-group mt-2">
//       <i className="input-icon uil uil-lock-alt"></i>
//       <input
//         type="password"
//         name="password"
//         className="form-style"
//         placeholder="Your Password"
//         id="logpass"
//         autoComplete="off"
//         onChange={(e) =>
//           SetPassword({  password: e.target.value })
//         }
//       />
//     </div>
//     <button type="submit" className="btn btn-secondary mt-4">
//       {" "}
//       <Link to="http://localhost:9292/auth/login"> Submit</Link>
//     </button>
//   </form>
// );
// }

// export default SignUp;