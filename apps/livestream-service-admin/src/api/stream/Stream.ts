import { Message } from "../message/Message";
import { PeerConnection } from "../peerConnection/PeerConnection";
import { User } from "../user/User";

export type Stream = {
  createdAt: Date;
  description: string | null;
  id: string;
  messages?: Array<Message>;
  peerConnections?: Array<PeerConnection>;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
