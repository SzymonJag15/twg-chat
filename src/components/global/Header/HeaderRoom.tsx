import BackIcon from '@/components/icons/BackIcon';
import PhoneIcon from '@/components/icons/PhoneIcon';
import ProfileIcon from '@/components/icons/ProfileIcon';
import VideoIcon from '@/components/icons/VideoIcon';
import { BASE_COLORS, ROUNDED } from '@/constants/styles';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { IHeaderRoomProps } from './Headers.types';

const HeaderRoom = ({ onBack, name, status }: IHeaderRoomProps): JSX.Element => (
  <View style={styles.container}>
    <View style={styles.dataContainer}>
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
    </View>
    <View style={styles.actionIconsWrapper}>
      <PhoneIcon style={styles.phoneIcon} color={BASE_COLORS.darkViolet} />
      <VideoIcon color={BASE_COLORS.darkViolet} />
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
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 120,
    width: '100%',
  },
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: BASE_COLORS.darkViolet,
  },
  actionIconsWrapper: {
    flexDirection: 'row',
  },
  backIcon: {
    width: 12,
    height: 20,
    color: BASE_COLORS.darkViolet,
  },
  phoneIcon: {
    marginRight: 5,
  },
  personWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  personTitleWrapper: {
    marginLeft: 12,
  },
  personName: {
    fontSize: 14,
    color: BASE_COLORS.darkViolet,
    fontWeight: '700',
  },
  status: {
    fontSize: 14,
    color: BASE_COLORS.white,
  },
});

export default HeaderRoom;
