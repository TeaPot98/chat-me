import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { useForm, SubmitHandler } from "react-hook-form";

import { Button, Input } from "components";
import { makeBEM } from "utils";
import api from "api";
import { AppLogo } from "components/AppLogo/AppLogo";

type Inputs = {
  email: string;
  password: string;
  name: string;
  surname: string;
  username: string;
};

interface LoginFormProps {
  className?: string;
}

const bem = makeBEM("form");

export const RegistrationForm = ({
  className,
  ...props
}: LoginFormProps & JSX.IntrinsicElements["form"]) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Inputs>();

  const registration = useMutation(
    (newUser: Inputs) => {
      return api.auth.register({
        ...newUser,
        avatar:
          "https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      });
    },
    {
      onSuccess: () => {
        navigate("/chats");
      },
    }
  );

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    registration.mutate(data);
  };

  return (
    <form
      className={classNames(bem(), className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <div className={bem("header")}>
        <AppLogo />
        {/* <h4>Get Started</h4> */}
        <p>Create your free account</p>
      </div>
      <Input label="Name" type="text" {...register("name")} />
      <Input label="Surname" type="text" {...register("surname")} />
      <Input label="Username" type="text" {...register("username")} />
      <Input label="Password" type="password" {...register("password")} />
      <div className={bem("footer")}>
        <span className={bem("error")}>{}</span>
        <p>
          Already have an account ? <Link to="/login">Login</Link>
        </p>
        <Button type="submit">
          {registration.isLoading ? "Registering..." : "Sign Up"}
        </Button>
      </div>
    </form>
  );
};
