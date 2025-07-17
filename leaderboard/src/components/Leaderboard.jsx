import React from "react";
import { FaTrophy } from "react-icons/fa";

const Leaderboard = ({ leaderboard }) => (
  <div className="overflow-x-auto max-w-2xl mx-auto mt-6">
    <table className="w-full text-left border border-gray-300 shadow-lg rounded-xl overflow-hidden">
      <thead className="bg-gray-100 text-gray-700">
        <tr>
          <th className="px-4 py-2">Rank</th>
          <th className="px-4 py-2">User</th>
          <th className="px-4 py-2">Total Points</th>
        </tr>
      </thead>
      <tbody>
        {leaderboard.map((user, index) => (
          <tr
            key={index}
            className={`${
              index === 0 ? "bg-yellow-100 font-semibold" : "bg-white"
            } border-t`}
          >
            <td className="px-4 py-2">
              {index === 0 ? (
                <span className="flex items-center gap-2 text-yellow-500">
                  <FaTrophy className="text-xl" />
                  {user.rank}
                </span>
              ) : (
                user.rank
              )}
            </td>
            <td className="px-4 py-2">{user.name}</td>
            <td className="px-4 py-2">{user.totalPoints}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Leaderboard;
