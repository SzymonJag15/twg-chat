import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

const UIManager = ({ children }: { children: ReactNode }): JSX.Element => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
  },
});

export default UIManager;
