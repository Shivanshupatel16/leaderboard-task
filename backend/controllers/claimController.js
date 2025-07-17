import User from "../modals/user.js";
import ClaimHistory from "../modals/ClaimHistory.js";

export const claimPoints = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const randomPoints = Math.floor(Math.random() * 10) + 1;
    user.totalPoints += randomPoints;
    await user.save();

    const history = new ClaimHistory({
      userId: user._id,
      points: randomPoints,
    });
    await history.save();

    res.json({
      message: "Points claimed successfully",
      user,
      claimedPoints: randomPoints,
    });
  } catch (error) {
    console.error("Error claiming points:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getLeaderboard = async (req, res) => {
  try {
    const users = await User.find().sort({ totalPoints: -1 });
    const leaderboard = users.map((user, index) => ({
      name: user.name,
      totalPoints: user.totalPoints,
      rank: index + 1,
    }));
    res.json(leaderboard);
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
