import { GET_ROOMS } from '@/api/queries';
import SingleRoomListElement from '@/components/base/SingleRoomListElement/SingleRoomListElement';
import ProfileIcon from '@/components/icons/ProfileIcon';
import { RootStackProps } from '@/types/routes';
import { useQuery } from '@apollo/client';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SingleRoom } from './Rooms.types';

const Rooms = ({ navigation }: RootStackProps): JSX.Element => {
  const { data, loading } = useQuery(GET_ROOMS);

  if (loading) return <Text>Loading...</Text>;
  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Rooms;
