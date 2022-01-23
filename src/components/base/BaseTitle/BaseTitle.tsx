import { BASE_COLORS } from '@/constants/styles';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const BaseTitle = ({ title, ...props }: { title: string }): JSX.Element => (
  <Text style={styles.title} {...props}>
    {title}
  </Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 42,
    color: BASE_COLORS.darkViolet,
    marginBottom: 25,
  },
});

export default BaseTitle;
