import { useEffect, useState } from "react";
import axios from "axios";
import UserSelector from "./components/UserSelector";
import ClaimButton from "./components/claimButton";
import Leaderboard from "./components/Leaderboard";
import AddUserForm from "./components/addUserForm";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);

  const fetchUsers = async () => {
    try {
 
const res = await axios.get("https://leaderboard-task-9.onrender.com/api/users");
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchLeaderboard = async () => {
    try {
      
const res = await axios.get("https://leaderboard-task-9.onrender.com/api/claim/leaderboard");
      setLeaderboard(res.data);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchLeaderboard();
  }, []);

  return (
    <>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
         <h1 className="text-3xl font-bold text-center mb-6 text-red-700">
          Leaderboard System
        </h1>

        <AddUserForm onAdd={(newUser) => setUsers((prev) => [...prev, newUser])} />
        <UserSelector
          users={users}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
        <ClaimButton selectedUser={selectedUser} onClaim={fetchLeaderboard} />
        <Leaderboard leaderboard={leaderboard} />
      </div>
    </div>
    </>
  );
}

export default App;
