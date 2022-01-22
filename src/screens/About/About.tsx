import { RootStackProps } from '@/types/routes';
import React, { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';

const About = ({ navigation }: RootStackProps): JSX.Element => {
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

export default About;
