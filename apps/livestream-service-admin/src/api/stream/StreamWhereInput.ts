import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { PeerConnectionListRelationFilter } from "../peerConnection/PeerConnectionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StreamWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  peerConnections?: PeerConnectionListRelationFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
