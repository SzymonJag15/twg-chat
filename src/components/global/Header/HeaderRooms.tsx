import RoomsIcon from '@/components/icons/RoomsIcon';
import SearchIcon from '@/components/icons/SearchIcon';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeaderRooms = ({ title }: { title: string }): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.actionIconsWrapper}>
      <SearchIcon style={styles.icon} color="#5603AD" />
      <RoomsIcon color="#5603AD" />
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

export default HeaderRooms;
