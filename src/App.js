import "./App.css";
import { useState, useEffect } from "react";
import { collection, doc, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

function App() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [newHeight, setNewHeight] = useState("");
  const [newWeight, setNewWeight] = useState("");
  const usersRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersRef, {
      Name: newName,
      Age: newAge,
      Height: newHeight,
      Weight: newWeight,
    });
  };

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
      <input placeholder="Name" onChange={(e) => setNewName(e.target.value)} />
      <input
        type="number"
        placeholder="Age"
        onChange={(e) => setNewAge(e.target.value)}
      />
      <input
        placeholder="Height"
        onChange={(e) => setNewHeight(e.target.value)}
      />
      <input
        placeholder="Weight"
        onChange={(e) => setNewWeight(e.target.value)}
      />

      <button onClick={createUser}>Add User</button>
      {users.map((user) => {
        return (
          <div>
            {`Name: ${user.firstName} ${user.lastName}, 
            Age: ${user.age}, 
            Height: ${user.height}, 
            Weight: ${user.weight},
            key: ${user.id}`}
          </div>
        );
      })}
    </div>
  );
}

export default App;
