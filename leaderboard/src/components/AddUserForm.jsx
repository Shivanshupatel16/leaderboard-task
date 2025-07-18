import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const AddUserForm = ({ onAdd }) => {
  const [name, setName] = useState("");

  const handleAdd = async () => {
    if (!name.trim()) return;
    try {
  const res = await axios.post("https://leaderboard-task-9.onrender.com/api/users/add", { name });
      onAdd(res.data);
      setName("");

      toast.success(`User "${res.data.name}" added successfully!`);
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error("Something went wrong while adding user.");
    }
  };

  return (
    <div className="flex items-center gap-4 bg-white shadow-md p-4 rounded-xl w-full max-w-md mx-auto">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Add
      </button>
    </div>
  );
};

export default AddUserForm;
