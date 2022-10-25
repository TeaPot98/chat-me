import { Message } from "./message";

export interface Chat {
  id: string;
  name: string;
  avatar: string;
  participants: string[];
  messages: Message[];
}
