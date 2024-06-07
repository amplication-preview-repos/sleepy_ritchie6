import { MessageCreateNestedManyWithoutStreamsInput } from "./MessageCreateNestedManyWithoutStreamsInput";
import { PeerConnectionCreateNestedManyWithoutStreamsInput } from "./PeerConnectionCreateNestedManyWithoutStreamsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StreamCreateInput = {
  description?: string | null;
  messages?: MessageCreateNestedManyWithoutStreamsInput;
  peerConnections?: PeerConnectionCreateNestedManyWithoutStreamsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
