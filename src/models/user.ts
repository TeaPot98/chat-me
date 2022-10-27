export interface User {
  id: string;
  name: string;
  surname: string;
  username: string;
  avatar: string;
  chats: string[];
}

export interface RegistrationUser extends Omit<User, "id" | "chats" | "token"> {
  password: string;
}

export interface UserContext {
  loggedUser: LoggedUser | null;
  updateLoggedUser: (user: LoggedUser) => void;
}

export interface LoggedUser extends User {
  token: string;
}

export interface UserLoginCredentials {
  username: string;
  password: string;
}
