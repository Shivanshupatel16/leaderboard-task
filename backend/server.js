import express from "express";
import cors from "cors";
import connectDB from "./db/db.js";

import userRoutes from "./routes/userRoutes.js";
import claimRoutes from "./routes/claimRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/users", userRoutes);
app.use("/api/claim", claimRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
