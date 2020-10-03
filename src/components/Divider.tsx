import React from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {
  style?: object;
}

export default (props: Props) => {
  return <View style={{...styles.divider, ...props.style}} />;
};

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
});
