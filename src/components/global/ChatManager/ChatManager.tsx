import SendIcon from '@/components/icons/SendIcon';
import { BASE_COLORS, ROUNDED } from '@/constants/styles';
import React from 'react';
import {
  Composer,
  ComposerProps,
  IMessage,
  InputToolbar,
  InputToolbarProps,
  Message,
  MessageProps,
  MessageText,
  MessageTextProps,
  Send,
  SendProps,
} from 'react-native-gifted-chat';

export const renderMessage = (props: MessageProps<IMessage>) => (
  <Message
    {...props}
    containerStyle={{
      left: { backgroundColor: BASE_COLORS.white },
      right: { backgroundColor: BASE_COLORS.lightViolet },
    }}
  />
);

export const renderMessageText = (props: MessageTextProps<IMessage>) => (
  <MessageText
    {...props}
    containerStyle={{
      left: { backgroundColor: BASE_COLORS.white },
      right: {
        backgroundColor: BASE_COLORS.lightViolet,
        borderRadius: ROUNDED.small,
        borderBottomRightRadius: 0,
      },
    }}
    textStyle={{
      left: { color: BASE_COLORS.primaryFont, fontSize: 14 },
      right: { color: BASE_COLORS.white, fontSize: 14 },
    }}
  />
);

export const renderInputToolbar = (props: InputToolbarProps) => (
  <InputToolbar
    {...props}
    containerStyle={{
      backgroundColor: BASE_COLORS.darkBlue,
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 25,
      width: '100%',
      borderTopWidth: 0,
      borderTopLeftRadius: ROUNDED.small,
      borderTopRightRadius: ROUNDED.small,
    }}
    primaryStyle={{ alignItems: 'center' }}
  />
);

export const renderComposer = (props: ComposerProps) => (
  <Composer
    {...props}
    placeholder=""
    textInputStyle={{
      color: '#222B45',
      backgroundColor: BASE_COLORS.white,
      borderWidth: 1,
      borderRadius: ROUNDED.small,
      borderBottomRightRadius: 0,
      paddingHorizontal: 12,
      marginLeft: 0,
      maxWidth: '90%',
    }}
  />
);

export const renderSend = (props: SendProps<IMessage>) => (
  <Send
    {...props}
    disabled={!props.text}
    containerStyle={{
      width: 44,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 4,
    }}
  >
    <SendIcon color={BASE_COLORS.darkViolet} height="30px" />
  </Send>
);
