import SendIcon from '@/components/icons/SendIcon';
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
      left: { backgroundColor: '#fff' },
      right: { backgroundColor: '#993AFC' },
    }}
  />
);

export const renderMessageText = (props: MessageTextProps<IMessage>) => (
  <MessageText
    {...props}
    containerStyle={{
      left: { backgroundColor: '#fff' },
      right: { backgroundColor: '#993AFC', borderRadius: 12, borderBottomRightRadius: 0 },
    }}
    textStyle={{
      left: { color: '#1A1A1A' },
      right: { color: '#fff' },
    }}
  />
);

export const renderInputToolbar = (props: InputToolbarProps) => (
  <InputToolbar
    {...props}
    containerStyle={{
      backgroundColor: '#B6DEFD',
      paddingHorizontal: 16,
      paddingTop: 6,
      width: '100%',
      borderTopWidth: 0,
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
      backgroundColor: '#fff',
      borderWidth: 1,
      borderRadius: 5,
      borderBottomRightRadius: 0,
      borderColor: '#E4E9F2',
      paddingTop: 8.5,
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
    <SendIcon color="#5603AD" height="30px" />
  </Send>
);
