import { useEffect, useState } from "react";
import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Userscomponent } from "../components/UsersComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    async function getMyData() {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/user/me",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setBalance(response.data.balance);
        setName(response.data.firstName);
      } catch (error) {
        navigate("/signin");
      }
    }
    getMyData();
  }, [balance, name]);
  return (
    <div>
      <AppBar name={name} />
      <Balance value={balance} />
      <Userscomponent />
    </div>
  );
}
