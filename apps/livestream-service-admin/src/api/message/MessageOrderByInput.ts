import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  sentAt?: SortOrder;
  streamId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
