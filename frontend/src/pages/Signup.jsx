import React, { useEffect, useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
          <Heading label={"Sign Up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox
            label={"First Name"}
            placeholder={"John"}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <InputBox
            label={"Last Name"}
            placeholder={"Doe"}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <InputBox
            label={"Email"}
            placeholder={"johndoe@example.com"}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <InputBox
            label={"Password"}
            placeholder={"password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            label={"Sign up"}
            onClick={async () => {
              try {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signup",
                  {
                    username,
                    firstName,
                    lastName,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
              } catch (error) {
                alert(error.response.data.message);
              }
            }}
          />
          <BottomWarning
            label={"Already have an account?"}
            text={" Sign In"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
}
