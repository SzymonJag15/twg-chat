import { StackScreenProps } from "@react-navigation/stack"

export type RootStackStackParamList = {
  Login: undefined;
  Rooms: undefined;
  Room: {id: string}
}

export type RootStackProps = StackScreenProps<RootStackStackParamList>