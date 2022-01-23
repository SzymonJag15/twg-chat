import RoomsIcon from '@/components/icons/RoomsIcon';
import SearchIcon from '@/components/icons/SearchIcon';
import { BASE_COLORS, ROUNDED } from '@/constants/styles';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeaderRooms = ({ title }: { title: string }): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.actionIconsWrapper}>
      <SearchIcon style={styles.icon} color={BASE_COLORS.darkViolet} />
      <RoomsIcon color={BASE_COLORS.darkViolet} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: BASE_COLORS.darkBlue,
    borderBottomRightRadius: ROUNDED.big,
    borderBottomLeftRadius: ROUNDED.big,
    padding: 16,
    paddingBottom: 20,
    marginBottom: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 120,
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: BASE_COLORS.darkViolet,
  },
  actionIconsWrapper: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 5,
  },
});

export default HeaderRooms;
