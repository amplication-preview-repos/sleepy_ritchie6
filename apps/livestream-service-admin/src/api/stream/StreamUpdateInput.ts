import { MessageUpdateManyWithoutStreamsInput } from "./MessageUpdateManyWithoutStreamsInput";
import { PeerConnectionUpdateManyWithoutStreamsInput } from "./PeerConnectionUpdateManyWithoutStreamsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StreamUpdateInput = {
  description?: string | null;
  messages?: MessageUpdateManyWithoutStreamsInput;
  peerConnections?: PeerConnectionUpdateManyWithoutStreamsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
