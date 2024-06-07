import { PeerConnection as TPeerConnection } from "../api/peerConnection/PeerConnection";

export const PEERCONNECTION_TITLE_FIELD = "id";

export const PeerConnectionTitle = (record: TPeerConnection): string => {
  return record.id?.toString() || String(record.id);
};
