import { StreamWhereUniqueInput } from "../stream/StreamWhereUniqueInput";

export type PeerConnectionUpdateInput = {
  status?: "Option1" | null;
  stream?: StreamWhereUniqueInput | null;
};
