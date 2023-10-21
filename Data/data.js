import { useState } from "react";
export default function Data() {
  const [data, setData] = useState([]);

  return data;
}
export const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  // Add more users as needed
];

// export default function Data() {
//     const [data, setData] = useState([
//       {
//         fullname: "",
//         birthdate: "",
//         location: "",
//         phonenumber: "",
//         username: "",
//         email: "",
//         password: "",
//         confirmpassword: "",
//       },
//     ]);
//   }
