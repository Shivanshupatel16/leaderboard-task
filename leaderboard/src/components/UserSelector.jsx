const UserSelector = ({ users, selectedUser, setSelectedUser }) => (
  <div className="mt-4">
    <select
      value={selectedUser}
      onChange={(e) => setSelectedUser(e.target.value)}
      className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ml-36"
    >
      <option value="">Select User</option>
      {users.map((user) => (
        <option key={user._id} value={user._id}>
          {user.name}
        </option>
      ))}
    </select>
  </div>
);

export default UserSelector;
