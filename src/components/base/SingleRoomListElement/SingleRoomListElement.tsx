import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ISingleRoomListElementProps } from './SingleRoomListElement.types';

const SingleRoomListElement = ({
  avatar,
  name,
  lastMessage,
  timeAgo,
  onPress,
}: ISingleRoomListElementProps): JSX.Element => (
  <Pressable onPress={onPress} style={styles.pressWrapper}>
    <View style={styles.avatar}>{avatar}</View>
    <View>
      <Text style={styles.commonText}>{name}</Text>
      <Text style={[styles.commonText, styles.smallText]}>{lastMessage}</Text>
    </View>
    <Text style={styles.timeAgo}>{timeAgo}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  pressWrapper: {
    flexDirection: 'row',
    position: 'relative',
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    marginBottom: '12px',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  avatar: {
    marginRight: '16px',
  },
  commonText: {
    color: '#1a1a1a',
    fontSize: 15,
  },
  smallText: {
    fontSize: 14,
  },
  timeAgo: {
    position: 'absolute',
    right: 5,
    top: 5,
    fontSize: 13,
    color: '#9FA2B2',
  },
});

export default SingleRoomListElement;
