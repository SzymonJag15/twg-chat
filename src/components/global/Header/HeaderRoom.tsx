import BackIcon from '@/components/icons/BackIcon';
import PhoneIcon from '@/components/icons/PhoneIcon';
import ProfileIcon from '@/components/icons/ProfileIcon';
import SearchIcon from '@/components/icons/SearchIcon';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { IHeaderRoomProps } from './Headers.types';

const HeaderRoom = ({ onBack, name, status }: IHeaderRoomProps): JSX.Element => (
  <View style={styles.container}>
    <Pressable onPress={onBack}>
      <BackIcon style={styles.backIcon} />
    </Pressable>
    <View style={styles.personWrapper}>
      <ProfileIcon width="44px" height="44px" />
      <View style={styles.personTitleWrapper}>
        <Text style={styles.personName}>{name}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>
    </View>
    <View style={styles.actionIconsWrapper}>
      <SearchIcon style={styles.searchIcon} color="#5603AD" />
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
  backIcon: {
    marginBottom: 12,
  },
  searchIcon: {
    marginRight: 5,
  },
  personWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  personTitleWrapper: {
    marginLeft: 12,
  },
  personName: {
    fontSize: 14,
    color: '#5603AD',
    fontWeight: '700',
  },
  status: {
    fontSize: 14,
    color: '#fff',
  },
});

export default HeaderRoom;
