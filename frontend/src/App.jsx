import { Button1, Button2 } from "./components/button.jsx";
import Mutton from "./components/button.jsx";
import Login from "./components/Loging.jsx";
import Profile from "./components/Profile.jsx";
const App = () => {
  // const name = "Palovon";
  const data = [
    { id: 1, name: "Palovon", age: 30, email: "plavan@gmail.com" },
    {
      id: 2,
      name: "Mrinmoy",
      age: 60,
      email: "mrinmoy@gmail.com",
      maragechualStatus: "married",
    },
  ];
  // const isLogin = true;
  return (
    <>
      {/* <button>Normal Button</button>
    <Mutton/>
    <Button1/>
    <Button2/> */}
      {/* <Login fname="Palovon"/> */}
      {/* {isLogin && <h1>Wellcome to Our Page</h1>}
      {isLogin || <h1>Please Login</h1>} */}
      {/* {data.length > 0 &&
        data.map((user) => (
          <ul key={user.id}>
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.email}</li>
            <li>{user?.maragechualStatus || "Not Mentioned"}</li>
          </ul>
        ))} */}

      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Marital Status</th>
          </tr>
        </thead>
        <tbody>
        {data.length > 0 &&
          data.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user?.maragechualStatus || "Not Mentioned"}</td>
            </tr>
          ))}
          </tbody>
      </table>
    </>
  );
};
export default App;
