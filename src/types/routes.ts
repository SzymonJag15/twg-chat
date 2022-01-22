import { StackScreenProps } from "@react-navigation/stack"

export type RootStackStackParamList = {
  Rooms: undefined;
  Room: {id: string}
}

export type RootStackProps = StackScreenProps<RootStackStackParamList>