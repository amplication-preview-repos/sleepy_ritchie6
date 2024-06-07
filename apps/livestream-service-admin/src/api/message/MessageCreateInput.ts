import { StreamWhereUniqueInput } from "../stream/StreamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageCreateInput = {
  content?: string | null;
  sentAt?: Date | null;
  stream?: StreamWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
