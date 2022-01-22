import { GET_ROOM } from '@/api/queries';
import { RootStackProps } from '@/types/routes';
import { useQuery } from '@apollo/client';
import React, { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';

const Room = ({ navigation, route }: RootStackProps): JSX.Element => {
  // @ts-expect-error types for params
  const { id } = route.params;
  const { data } = useQuery(GET_ROOM, {
    variables: { id },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const [messages, setMessages] = useState<IMessage[]>();

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);

  return (
    <View style={styles.container}>
      <GiftedChat messages={messages} onSend={(messages) => onSend(messages)} />
      <Button title="Rooms" onPress={() => navigation.navigate('Rooms')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Room;
