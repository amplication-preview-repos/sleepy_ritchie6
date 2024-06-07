import { Message } from "../message/Message";
import { JsonValue } from "type-fest";
import { Stream } from "../stream/Stream";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  messages?: Array<Message>;
  roles: JsonValue;
  streams?: Array<Stream>;
  updatedAt: Date;
  username: string;
};
