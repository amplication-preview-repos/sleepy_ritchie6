import { MessageUpdateManyWithoutUsersInput } from "./MessageUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StreamUpdateManyWithoutUsersInput } from "./StreamUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  messages?: MessageUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  streams?: StreamUpdateManyWithoutUsersInput;
  username?: string;
};
