import BackIcon from '@/components/icons/BackIcon';
import PhoneIcon from '@/components/icons/PhoneIcon';
import ProfileIcon from '@/components/icons/ProfileIcon';
import SearchIcon from '@/components/icons/SearchIcon';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const HeaderRoom = ({ onBack }: { onBack: () => void }): JSX.Element => (
  <View style={styles.container}>
    <Pressable onPress={onBack}>
      <BackIcon />
    </Pressable>
    <View>
      <ProfileIcon />
      <View>
        <Text>The Widlarz Group</Text>
        <Text>Active now</Text>
      </View>
    </View>
    <View style={styles.actionIconsWrapper}>
      <SearchIcon style={styles.icon} color="#5603AD" />
      <PhoneIcon color="#5603AD" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B6DEFD',
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    padding: 16,
    paddingBottom: 20,
    marginBottom: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 130,
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#5603AD',
  },
  actionIconsWrapper: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 5,
  },
});

export default HeaderRoom;
