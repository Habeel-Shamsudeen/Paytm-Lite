import { useEffect, useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Signin() {
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
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
        if(response.data.loggedIn){
          navigate('/dashboard');
        }
      } catch (err) {}
    }
    getMyData();
  }, []);
  return (
    <div className="flex h-screen justify-center bg-slate-300">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white text-center h-max w-80 px-4 p-2">
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            label={"Email"}
            placeholder={"johndoe@example.com"}
            onChange={(e) => setUserName(e.target.value)}
          />
          <InputBox
            label={"Password"}
            placeholder={""}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            label={"Sign in"}
            onClick={async () => {
              try {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signin",
                  {
                    username,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
              } catch (err) {
                alert(err.response.data.message);
              }
            }}
          />
          <BottomWarning
            label={"Don't have an account? "}
            text={"Sign Up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
}
