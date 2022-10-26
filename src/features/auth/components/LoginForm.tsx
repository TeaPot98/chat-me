import { useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { useForm, SubmitHandler } from "react-hook-form";

import { Button, Input } from "components";
import { makeBEM } from "utils";
import api from "api";
import { UserContext } from "context/UserContext";

type Inputs = {
  username: string;
  password: string;
};

interface LoginFormProps {
  className?: string;
}

const bem = makeBEM("form");

export const LoginForm = ({
  className,
  ...props
}: LoginFormProps & JSX.IntrinsicElements["form"]) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Inputs>();
  const { updateLoggedUser } = useContext(UserContext);

  const login = useMutation(
    (userCredentials: Inputs) => {
      return api.auth.login(userCredentials);
    },
    {
      onSuccess: (loggedUser) => {
        updateLoggedUser(loggedUser);
        navigate("/chats");
      },
    }
  );

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    login.mutate(data);
  };

  return (
    <form
      className={classNames(bem(), className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <div className={bem("header")}>
        <h4>Welcome back!</h4>
        <p>Login to your account</p>
      </div>
      <Input label="Username" type="username" {...register("username")} />
      <Input label="Password" type="password" {...register("password")} />
      <div className={bem("footer")}>
        <span className={bem("error")}>{}</span>
        <p>
          Don&apos;t have an account ? <Link to="/register">Sign Up</Link>
        </p>
        <Button type="submit">
          {login.isLoading ? "Logging in..." : "Log in"}
        </Button>
      </div>
    </form>
  );
};
