import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import FriendList from "./components/FriendList";
import User from "./components/User";
import FriendContext from "./context/FriendContext";

function App() {
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.data)
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className='App'>
      {/*j'importe le context  */}
      <FriendContext.Provider value={{ friends, setFriends}}>
        <FriendList
          /* TODO replace friends with context */
          // friends={friends}
        />

        <h2>Users :</h2>
        {users.map((user) => (
          <User
            key={user.id}
            {...user}
            /* TODO replace friends and setFriends with context */
            // friends={friends}
            // setFriends={setFriends}
          />
        ))}
      </FriendContext.Provider>
    </div>
  );
}

export default App;
