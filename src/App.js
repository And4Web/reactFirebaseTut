import "./App.css";
import { useState, useEffect } from "react";
import { collection } from "firebase/firestore";
import { db } from "./firebaseConfig";

function App() {
  const [users, setUsers] = useState([]);
  const usersRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {};
    getUsers();
  }, []);
  return (
    <div className="App">
      <h1>Hello...</h1>
    </div>
  );
}

export default App;
