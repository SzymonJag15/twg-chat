import { SingleMessage } from "@/screens/Room/Room.types";

export const changeToMessageScheme = (message: SingleMessage) => ({
  _id: message.id,
  text: message.body,
  user: {
    _id: message.user.id,
    name: `${message.user.firstName} ${message.user.lastName}`,
  },
});