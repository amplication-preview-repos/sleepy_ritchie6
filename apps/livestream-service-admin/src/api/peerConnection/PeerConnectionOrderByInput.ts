import { SortOrder } from "../../util/SortOrder";

export type PeerConnectionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  streamId?: SortOrder;
  updatedAt?: SortOrder;
};
