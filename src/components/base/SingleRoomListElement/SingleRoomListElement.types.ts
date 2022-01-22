import { ReactElement } from "react";

export interface ISingleRoomListElementProps {
  avatar: ReactElement;
  name: string;
  lastMessage: string;
  timeAgo: string;
  onPress: () => void;
}