import React from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
export function Signup() {
  return (
    <div className="flex h-screen justify-center bg-slate-300">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white text-center h-max w-80 px-4 p-2">
          <Heading label={"Sign Up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox label={"First Name"} placeholder={"John"} />
          <InputBox label={"Last Name"} placeholder={"Doe"} />
          <InputBox label={"Email"} placeholder={"johndoe@example.com"} />
          <InputBox label={"Password"} placeholder={"password"} />
          <Button
            label={"Sign up"}
            onClick={() => {
              alert("hello");
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
