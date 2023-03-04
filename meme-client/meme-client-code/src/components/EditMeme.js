// import React, { useState } from "react";

// function EditMessage({ id }) {
// //   const [messageBody, setMessageBody] = useState(body);
// let [name, setName] = useState("")
//   let [text_top, setTextTop] = useState("");
//   let [text_bottom, setTextBottom] = useState("");

//   function handleFormSubmit(e) {
//     e.preventDefault();

//     fetch(`http://localhost:9292/memes/update/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: name,
//         text_top: text_top,
//         text_bottom: text_bottom
//       }),
//     })
//     .then((r) => r.json())
//     .then((data) => {
//      setName(name)
//      setTextTop(text_top)
//      setTextBottom(text_bottom)
//     });
// }

//   return (
//     <form className="edit-message" onSubmit={handleFormSubmit}>
//       <input
//         type="text"
//         name="body"
//         autoComplete="off"
//         value={messageBody}
//         onChange={(e) => setMessageBody(e.target.value)}
//       />
//       <input type="submit" value="Save" />
//     </form>
//   );
// }

// export default EditMessage;