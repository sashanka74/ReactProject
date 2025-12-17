import { useEffect, useState } from "react";
import axios from "axios";
import UserData from "./UserData";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch users
  useEffect(() => {
    axios.get("https://dummyjson.com/users")
      .then(res => setUsers(res.data.users))
      .catch(err => console.error(err));
  }, []);

  // Delete user
  const deleteUser = async (id) => {
    await axios.delete(`https://dummyjson.com/users/${id}`);
    setUsers(users.filter(user => user.id !== id));
  };

  // Update user in UI
  const updateUser = (updatedUser) => {
    setUsers(users.map(user =>
      user.id === updatedUser.id ? updatedUser : user
    ));
    setSelectedUser(null);
  };

  return (
    <div className="p-8 bg-lime-400">
      <h1 className="text-3xl justify-center text-black-600 font-bold mb-6">Users</h1>

      <div className="grid gap-4">
        {users.map(user => (
          <div
            key={user.id}
            className="flex justify-between items-center bg-white shadow rounded-lg p-4"
          >
            <div>
              <h3 className="font-semibold">
                {user.firstName} {user.lastName}
              </h3>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setSelectedUser(user)}
                className="px-4 py-1 bg-blue-600 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteUser(user.id)}
                className="px-4 py-1 bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Drawer */}
      {selectedUser && (
        <UserData
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onSave={updateUser}
        />
      )}
    </div>
  );
}