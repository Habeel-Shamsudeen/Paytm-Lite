import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export function Signin() {
  return (
    <div className="flex h-screen justify-center bg-slate-300">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white text-center h-max w-80 px-4 p-2">
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox label={"Email"} placeholder={"johndoe@example.com"} />
          <InputBox label={"Password"} placeholder={""} />
          <Button
            label={"Sign in"}
            onClick={() => {
              alert("hello");
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
