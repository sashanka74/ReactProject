import { useState } from "react";
import axios from "axios";

export default function UserData({ user, onClose, onSave }) {
  const [form, setForm] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    age: user.age,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveChanges = async () => {
    const res = await axios.put(
      `https://dummyjson.com/users/${user.id}`,
      form
    );
    onSave(res.data);
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
      <div className="w-full sm:w-[400px] bg-white h-full p-6 shadow-lg">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Edit User</h2>
          <button onClick={onClose} className="text-xl">✖</button>
        </div>

        <div className="space-y-4">
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            placeholder="First Name"
          />

          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            placeholder="Last Name"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            placeholder="Email"
          />

          <input
            name="age"
            value={form.age}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            placeholder="Age"
          />

          <button
            onClick={saveChanges}
            className="w-full bg-indigo-600 text-white py-2 rounded mt-4"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}