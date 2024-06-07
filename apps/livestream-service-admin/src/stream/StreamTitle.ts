import { Stream as TStream } from "../api/stream/Stream";

export const STREAM_TITLE_FIELD = "title";

export const StreamTitle = (record: TStream): string => {
  return record.title?.toString() || String(record.id);
};
