import User from "../modals/user.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const addUser = async (req, res) => {
  try {
    const { name, totalPoints = 0 } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const user = new User({ name, totalPoints });
    await user.save();
     res.status(201).json(user);
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
