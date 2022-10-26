export interface User {
  id: string;
  token: string;
  name: string;
  surname: string;
  username: string;
  avatar: string;
  chats: string[];
}

export interface RegistrationUser extends Omit<User, "id" | "chats" | "token"> {
  password: string;
}
