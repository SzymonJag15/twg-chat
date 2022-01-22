import { StackScreenProps } from "@react-navigation/stack"

export type RootStackStackParamList = {
  Home: undefined;
  About: undefined
}

export type RootStackProps = StackScreenProps<RootStackStackParamList>