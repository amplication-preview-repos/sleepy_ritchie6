import { PeerConnectionWhereInput } from "./PeerConnectionWhereInput";
import { PeerConnectionOrderByInput } from "./PeerConnectionOrderByInput";

export type PeerConnectionFindManyArgs = {
  where?: PeerConnectionWhereInput;
  orderBy?: Array<PeerConnectionOrderByInput>;
  skip?: number;
  take?: number;
};
