import { useState } from "react";
import { Button } from "./Button";

export function Userscomponent() {
  const [users, setUsers] = useState([
    {
      firstName: "habeel",
      lastName: "Shamsudeen",
      _id: 123213,
    },
  ]);
  return (
    <div className="flex flex-col px-10">
      <div className="text-xl font-bold">Users</div>
      <input
        type="text"
        placeholder="Search users..."
        className="border rounded w-full px-2 py-1 border-slate-200"
      />
      <div>
        {users.map((user) => (
          <User user={user} />
        ))}
      </div>
    </div>
  );
}

function User({ user }) {
  return (
    <div className="flex justify-between mt-2">
      <div className="flex">
        <div class="flex items-center justify-start w-10 h-full overflow-hidden">
          <div class="justify-center font-medium text-gray-900 dark:text-gray-300 h-10 w-10 text-xl  bg-gray-100 rounded-full dark:bg-gray-500 flex items-center">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex justify-center items-center h-full ml-3">
          <div className=" font-semibold text-lg">
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>
      <div>
        <Button label={"Send Money"} />
      </div>
    </div>
  );
}
