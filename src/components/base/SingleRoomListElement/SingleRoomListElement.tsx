import { BASE_COLORS, ROUNDED } from '@/constants/styles';
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
    backgroundColor: BASE_COLORS.white,
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: ROUNDED.small,
  },
  avatar: {
    marginRight: 16,
  },
  commonText: {
    color: BASE_COLORS.primaryFont,
    fontSize: 15,
  },
  smallText: {
    fontSize: 14,
  },
  timeAgo: {
    position: 'absolute',
    right: 12,
    top: 5,
    fontSize: 13,
    color: '#9FA2B2',
  },
});

export default SingleRoomListElement;
