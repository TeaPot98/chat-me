import classNames from "classnames";
import { useForm, SubmitHandler } from "react-hook-form";

import { Button, Input } from "components";
import { makeBEM } from "utils";

type Inputs = {
  email: string;
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
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
      <Input label="Email" type="email" {...register("email")} />
      <Input label="Password" type="password" {...register("password")} />
      <div className={bem("footer")}>
        <span className={bem("error")}>{}</span>
        <p>
          Don&apos;t have an account ? <a href="/register">Sign Up</a>
        </p>
        <Button type="submit">Log in</Button>
      </div>
    </form>
  );
};
