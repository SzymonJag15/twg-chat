import { SEND_MESSAGE } from '@/api/mutation';
import { GET_CURRENT_USER_ID, GET_ROOM } from '@/api/queries';
import {
  renderComposer,
  renderInputToolbar,
  renderMessageText,
  renderSend,
} from '@/components/global/ChatManager/ChatManager';
import HeaderRoom from '@/components/global/Header/HeaderRoom';
import { RootStackProps } from '@/types/routes';
import { changeToMessageScheme } from '@/utils/messages';
import { useMutation, useQuery } from '@apollo/client';
import React, { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { SingleMessage } from './Room.types';

const Room = ({ navigation, route }: RootStackProps): JSX.Element => {
  // @ts-expect-error types for params
  const { id } = route.params;
  const { data: userID } = useQuery(GET_CURRENT_USER_ID);
  const { data: dataRoom } = useQuery(GET_ROOM, {
    variables: { id },
    pollInterval: 1000,
  });

  const [sendMessage] = useMutation(SEND_MESSAGE);

  useEffect(() => {
    if (!dataRoom) return;
    const allMessages: IMessage[] = dataRoom.room.messages.map((message: SingleMessage) =>
      changeToMessageScheme(message),
    );
    setMessages(allMessages);
  }, [dataRoom]);

  const [messages, setMessages] = useState<IMessage[]>();

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
    void sendMessage({ variables: { body: messages[0].text, roomId: id } });
  }, []);

  return (
    <View style={styles.container}>
      <HeaderRoom onBack={() => navigation.goBack()} />
      {userID && (
        <GiftedChat
          messages={messages}
          renderMessageText={renderMessageText}
          renderInputToolbar={renderInputToolbar}
          renderComposer={renderComposer}
          renderSend={renderSend}
          maxComposerHeight={50}
          alwaysShowSend
          wrapInSafeArea
          user={{
            _id: userID.user.id,
          }}
          onSend={onSend}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Room;
