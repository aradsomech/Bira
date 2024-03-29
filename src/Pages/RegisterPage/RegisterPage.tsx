import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import { RegisterValidation } from "@/validation/registerValidation";
import axios from "axios";
import ROUTES from "@/routes/ROUTES";
import { Icons } from "../LoginPage/icons";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
type User = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
};

export function RegisterPage({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [register, setRegister] = React.useState<User>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  const [errorsState, setErrorsState] = React.useState<Record<
    string,
    string
  > | null>(null);
  const navigate = useNavigate();
  console.log(errorsState);

  const [validationErrors, setValidationErrors] = React.useState<Record<
    string,
    string
  > | null>(null);
  console.log(validationErrors);

  const handleInputsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setRegister((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
    setValidationErrors((currentErrors) => ({
      ...currentErrors,
    }));
  };
  const handleButtonSubmit = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    try {
      event.preventDefault();
      const joiResponse = RegisterValidation(register);
      if (Array.isArray(joiResponse) && joiResponse.length > 0) {
        const newErrors = joiResponse.reduce(
          (acc: Record<string, string>, error: any) => {
            acc[error.path[0]] = error.message;
            return acc;
          },
          {}
        );
        setErrorsState(newErrors);
        return;
      }
      //  console.log(joiResponse);
      setErrorsState(joiResponse);

      if (joiResponse) return;
      let { data } = await axios.post("/api/v1/users/register", register);
      // storeToken(data, rememberMe);
      toast.success("You sign in successfully, please login", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // console.log("Successfully sign in:", data);
      // autoLogin(true);
      navigate(ROUTES.LOGIN);
    } catch (err) {
      console.log("err from login", err);
    }
  };
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="name">
              first name
            </Label>
            <Input
              id="firstName"
              placeholder="first name"
              disabled={isLoading}
              onChange={handleInputsChange}
            />{" "}
            {errorsState?.password ? (
              <span className="text-error">{errorsState.firstName}</span>
            ) : null}
            <Label className="sr-only" htmlFor="email">
              last name
            </Label>
            <Input
              id="lastName"
              placeholder="last name"
              disabled={isLoading}
              onChange={handleInputsChange}
            />{" "}
            {errorsState?.password ? (
              <span className="text-error">{errorsState.lastName}</span>
            ) : null}
            <Label className="sr-only" htmlFor="number">
              phone number
            </Label>
            <Input
              id="phone"
              placeholder="phone number"
              disabled={isLoading}
              onChange={handleInputsChange}
            />{" "}
            {errorsState?.password ? (
              <span className="text-error">{errorsState.phone}</span>
            ) : null}
            <Label className="sr-only" htmlFor="n">
              Email
            </Label>
            <Input
              id="email"
              placeholder="mail"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              onChange={handleInputsChange}
            />{" "}
            {errorsState?.password ? (
              <span className="text-error">{errorsState.email}</span>
            ) : null}
            <Label className="sr-only" htmlFor="number">
              password{" "}
            </Label>
            <Input
              id="password"
              placeholder="password"
              type="password"
              disabled={isLoading}
              onChange={handleInputsChange}
            />
            {errorsState?.password ? (
              <span className="text-error">{errorsState.password}</span>
            ) : null}
          </div>
          <Button disabled={isLoading} onClick={handleButtonSubmit}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign up
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        Github
      </Button>
    </div>
  );
}
