// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";


// const Login = () => {

//   let [navigate, useNavigate] = useState("")
//   let [email, SetEmail] = useState("");
//   let [password, SetPassword] = useState("");


//   const handleLogin = (e) => {
//     e.preventDefault();

//     fetch("http://localhost:9292/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: email,
//         password: password,
//       }),
//     }).then((response) => {
//       if (response.ok) {
//         response.json().then((data) => {
//           SetEmail(email)
//           SetPassword(password)
//           console.log('Welcome')
//           navigate("http://localhost:9292/memes");
//         });
//       } else {
//         console.log("email or password incorrect");
//       }
//     });
//   };

//   return (
//     <form id="form-login" onSubmit={(e) => handleLogin(e)}>
//       <div className="form-group">
//         <i className="input-icon uil uil-at"></i>
//         <input
//           type="email"
//           name="email"
//           id="email"
//           className="form-style"
//           placeholder="Your Email"
//           autoComplete="off"
//           onChange={(e) => SetEmail({ email: e.target.value })}
//         />
//       </div>
//       <div className="form-group mt-2">
//         <i className="input-icon uil uil-lock-alt"></i>
//         <input
//           type="password"
//           name="password"
//           className="form-style"
//           placeholder="Your Password"
//           id="password"
//           autoComplete="off"
//           onChange={(e) =>
//             SetPassword({  password: e.target.value })
//           }
//         />
//       </div>
//       <button type="submit" className="btn btn-secondary mt-4">
//         {""}
//         Submit
//       </button>
//       <p className="mb-0 mt-4 text-center">
//         <a href="#0" className="" style={{"textDecoration": "none", "color": "#adb5bd"}}>
//           Forgot Your Password?
//         </a>
//       </p>
//     </form>
//   );
// };

// export default Login;