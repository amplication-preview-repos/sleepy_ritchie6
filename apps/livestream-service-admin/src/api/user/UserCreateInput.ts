import { MessageCreateNestedManyWithoutUsersInput } from "./MessageCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StreamCreateNestedManyWithoutUsersInput } from "./StreamCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  messages?: MessageCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  streams?: StreamCreateNestedManyWithoutUsersInput;
  username: string;
};
