import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Userscomponent() {
  const [users, setUsers] = useState([]);
  const [filter,setFilter] = useState("");
  

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter="+filter)
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);
  return (
    <div className="flex flex-col px-10">
      <div className="text-xl font-bold">Users</div>
      <input
        type="text"
        placeholder="Search users..."
        className="border rounded w-full px-2 py-1 border-slate-200"
        onChange={e=> setFilter(e.target.value)}
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
  const navigate = useNavigate();
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
        <Button onClick={()=>{
          navigate(`/send?id=${user._id}&name=${user.firstName}`);
        }} label={"Send Money"} />
      </div>
    </div>
  );
}
