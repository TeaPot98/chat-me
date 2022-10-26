import { useForm, SubmitHandler } from "react-hook-form";

import { Button, Input } from "components";

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type="email" {...register("email")} />
      <Input type="password" {...register("password")} />
      <Button type="submit">Submit</Button>
    </form>
  );
};
