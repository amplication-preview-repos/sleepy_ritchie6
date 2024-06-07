import { StringFilter } from "../../util/StringFilter";
import { StreamWhereUniqueInput } from "../stream/StreamWhereUniqueInput";

export type PeerConnectionWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  stream?: StreamWhereUniqueInput;
};
