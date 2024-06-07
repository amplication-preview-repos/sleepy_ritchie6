import { Stream } from "../stream/Stream";

export type PeerConnection = {
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  stream?: Stream | null;
  updatedAt: Date;
};
