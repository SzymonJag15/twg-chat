import { GET_ROOMS } from '@/api/queries';
import { RootStackProps } from '@/types/routes';
import { useQuery } from '@apollo/client';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import SingleRoomListElement from '@/components/base/SingleRoomListElement/SingleRoomListElement';
import HeaderRooms from '@/components/global/Header/HeaderRooms';
import ProfileIcon from '@/components/icons/ProfileIcon';
import { SingleRoom } from './Rooms.types';

const Rooms = ({ navigation, route }: RootStackProps): JSX.Element => {
  const { data } = useQuery(GET_ROOMS);

  return (
    <View style={styles.container}>
      <HeaderRooms title={route.name} />
      {data &&
        data.usersRooms.rooms.map((room: SingleRoom) => (
          <View key={room.id}>
            <SingleRoomListElement
              key={room.id}
              name={room.name}
              lastMessage="Last message!"
              timeAgo="16 day ago"
              avatar={<ProfileIcon />}
              onPress={() => navigation.navigate('Room', { id: room.id })}
            />
          </View>
        ))}

      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Rooms;
