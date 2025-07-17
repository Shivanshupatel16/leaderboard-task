import mongoose from "mongoose";

const claimHistorySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    points: Number,
    claimedAt: { type: Date, default: Date.now },
});

const ClaimHistory = mongoose.model("ClaimHistory", claimHistorySchema);
export default ClaimHistory;
