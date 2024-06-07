import { StreamWhereUniqueInput } from "../stream/StreamWhereUniqueInput";

export type PeerConnectionCreateInput = {
  status?: "Option1" | null;
  stream?: StreamWhereUniqueInput | null;
};
