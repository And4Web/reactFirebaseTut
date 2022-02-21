import "./App.css";
import { useState, useEffect } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

function App() {
  const [users, setUsers] = useState([]);
  const usersRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(users);
    };
    getUsers();
  }, []);
  return (
    <div className="App">
      <h1>Hello...</h1>
      {users.map((user) => {
        return (
          <div>
            Name: {user.firstName} {user.lastName} Age: {user.age} Height:
            {user.height} Weight: {user.weight}
          </div>
        );
      })}
    </div>
  );
}

export default App;
