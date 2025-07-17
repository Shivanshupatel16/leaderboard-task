import React from "react";
import axios from "axios";
import { toast } from "sonner";

const ClaimButton = ({ selectedUser, onClaim }) => {
  const handleClick = async () => {
    if (!selectedUser) return toast.warning("Please select a user first!");

    try {
      const res = await axios.post("/api/claim", { userId: selectedUser });
      const data = res.data;
      
      toast.success(`🎉 You claimed ${data.claimedPoints} points!`, {
        description: `Total: ${data.user.totalPoints} points`,
        duration: 4000,
      });

      onClaim();
    } catch (err) {
      toast.error("Failed to claim points");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition mt-3 ml-72"
    >
      Claim Points
    </button>
  );
};

export default ClaimButton;
