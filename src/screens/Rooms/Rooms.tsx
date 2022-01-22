import { GET_ROOMS } from '@/api/queries';
import { RootStackProps } from '@/types/routes';
import { useQuery } from '@apollo/client';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SingleRoom } from './Rooms.types';

const Rooms = ({ navigation }: RootStackProps): JSX.Element => {
  const { data, loading } = useQuery(GET_ROOMS);

  if (loading) return <Text>Loading...</Text>;
  return (
    <View style={styles.container}>
      {data &&
        data.usersRooms.rooms.map((room: SingleRoom) => <Text key={room.id}>{room.name}</Text>)}
      <Button title="About" onPress={() => navigation.navigate('About')} />
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

export default Rooms;