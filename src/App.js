import "./App.css";
import { useState, useEffect } from "react";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

function App() {
  const [users, setUsers] = useState([]);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [newHeight, setNewHeight] = useState("");
  const [newWeight, setNewWeight] = useState("");
  const usersRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersRef, {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
      height: newHeight,
      weight: newWeight,
    });
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
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
      <input
        placeholder="First Name"
        onChange={(e) => setNewFirstName(e.target.value)}
      />
      <input
        placeholder="Last Name"
        onChange={(e) => setNewLastName(e.target.value)}
      />
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
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              Delete User
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
