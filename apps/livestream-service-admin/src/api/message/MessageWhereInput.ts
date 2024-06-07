import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StreamWhereUniqueInput } from "../stream/StreamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  sentAt?: DateTimeNullableFilter;
  stream?: StreamWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
