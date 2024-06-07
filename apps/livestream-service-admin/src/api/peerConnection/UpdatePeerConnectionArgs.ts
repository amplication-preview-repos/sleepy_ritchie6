import { PeerConnectionWhereUniqueInput } from "./PeerConnectionWhereUniqueInput";
import { PeerConnectionUpdateInput } from "./PeerConnectionUpdateInput";

export type UpdatePeerConnectionArgs = {
  where: PeerConnectionWhereUniqueInput;
  data: PeerConnectionUpdateInput;
};
