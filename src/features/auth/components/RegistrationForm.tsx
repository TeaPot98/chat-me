import { Link } from "react-router-dom";
import classNames from "classnames";
import { useForm, SubmitHandler } from "react-hook-form";

import { Button, Input } from "components";
import { makeBEM } from "utils";

type Inputs = {
  email: string;
  password: string;
  name: string;
  surname: string;
};

interface LoginFormProps {
  className?: string;
}

const bem = makeBEM("form");

export const RegistrationForm = ({
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
        <h4>Get Started</h4>
        <p>Create your free account</p>
      </div>
      <Input label="Email" type="email" {...register("email")} />
      <Input label="Name" type="text" {...register("name")} />
      <Input label="Surname" type="text" {...register("surname")} />
      <Input label="Password" type="password" {...register("password")} />
      <div className={bem("footer")}>
        <span className={bem("error")}>{}</span>
        <p>
          Already have an account ? <Link to="/login">Login</Link>
        </p>
        <Button type="submit">Sign Up</Button>
      </div>
    </form>
  );
};
